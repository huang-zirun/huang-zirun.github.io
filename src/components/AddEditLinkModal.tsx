"use client";

import React, { useState, useEffect } from "react";
import { LinkItem, CategoryNode } from "@/types/nav";
import { flattenAllCategories } from "@/lib/tree-utils";
import { X, Sparkles, Loader2, Globe } from "lucide-react";

interface AddEditLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (link: LinkItem, targetCategoryId: string) => Promise<void>;
  initialLink?: LinkItem | null;
  defaultCategoryId: string;
  rootCategory: CategoryNode;
}

export default function AddEditLinkModal({
  isOpen,
  onClose,
  onSave,
  initialLink,
  defaultCategoryId,
  rootCategory,
}: AddEditLinkModalProps) {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [favicon, setFavicon] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [targetCategory, setTargetCategory] = useState(defaultCategoryId);

  const [isParsing, setIsParsing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [parseStatus, setParseStatus] = useState<string | null>(null);

  const allCategories = flattenAllCategories(rootCategory);

  useEffect(() => {
    if (initialLink) {
      setUrl(initialLink.url);
      setTitle(initialLink.title);
      setFavicon(initialLink.favicon || "");
      setDescription(initialLink.description || "");
      setTags(initialLink.tags?.join(", ") || "");
      setTargetCategory(defaultCategoryId);
    } else {
      setUrl("");
      setTitle("");
      setFavicon("");
      setDescription("");
      setTags("");
      setTargetCategory(defaultCategoryId);
    }
    setParseStatus(null);
  }, [initialLink, defaultCategoryId, isOpen]);

  if (!isOpen) return null;

  // Call the /api/parse-link serverless function
  const handleAutoParse = async () => {
    if (!url.trim()) return;

    setIsParsing(true);
    setParseStatus("正在自动抓取网页标题与图标...");

    try {
      const res = await fetch("/api/parse-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });

      if (!res.ok) {
        throw new Error("解析服务响应失败");
      }

      const data = await res.json();
      if (data.title) setTitle(data.title);
      if (data.favicon) setFavicon(data.favicon);
      if (data.description) setDescription(data.description);
      if (data.url) setUrl(data.url);

      setParseStatus("解析成功，请核对信息");
    } catch (err: unknown) {
      setParseStatus(`解析遇到问题: ${err instanceof Error ? err.message : "无法访问该地址"}`);
    } finally {
      setIsParsing(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim() || !title.trim()) return;

    setIsSaving(true);
    try {
      const linkPayload: LinkItem = {
        id: initialLink?.id || "link-" + Math.random().toString(36).substring(2, 9),
        title: title.trim(),
        url: url.trim(),
        favicon:
          favicon.trim() ||
          `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=64`,
        description: description.trim() || undefined,
        tags: tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        createdAt: initialLink?.createdAt || new Date().toISOString(),
      };

      await onSave(linkPayload, targetCategory);
      onClose();
    } catch (err) {
      alert("保存失败: " + (err instanceof Error ? err.message : "未知错误"));
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
          <h3 className="font-semibold text-slate-800 dark:text-slate-100">
            {initialLink ? "编辑链接" : "添加新链接"}
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* URL Input with Auto-Parse */}
          <div>
            <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
              网址 (URL) <span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                required
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onBlur={() => {
                  if (!initialLink && url.trim() && !title) {
                    handleAutoParse();
                  }
                }}
                className="flex-1 px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={handleAutoParse}
                disabled={isParsing || !url.trim()}
                className="px-3 py-2 text-xs font-medium bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition flex items-center space-x-1 disabled:opacity-50"
              >
                {isParsing ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Sparkles className="w-3.5 h-3.5" />
                )}
                <span>自动解析</span>
              </button>
            </div>
            {parseStatus && (
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">{parseStatus}</p>
            )}
          </div>

          {/* Title */}
          <div>
            <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
              网页名称 / 标题 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="例如: GitHub"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category Selector */}
          <div>
            <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
              保存至分类
            </label>
            <select
              value={targetCategory}
              onChange={(e) => setTargetCategory(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {allCategories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          {/* Favicon URL with Preview */}
          <div>
            <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
              图标链接 (Favicon)
            </label>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden flex-shrink-0">
                {favicon ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={favicon}
                    alt="icon"
                    className="w-5 h-5 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2364748b' viewBox='0 0 16 16'><circle cx='8' cy='8' r='7'/></svg>";
                    }}
                  />
                ) : (
                  <Globe className="w-4 h-4 text-slate-400" />
                )}
              </div>
              <input
                type="text"
                placeholder="https://.../favicon.ico"
                value={favicon}
                onChange={(e) => setFavicon(e.target.value)}
                className="flex-1 px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs text-slate-600 dark:text-slate-400"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
              网页简介 / 备注
            </label>
            <textarea
              rows={2}
              placeholder="简要说明此网页的用途或亮点..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
              标签 (英文逗号分隔)
            </label>
            <input
              type="text"
              placeholder="工具, 编程, AI"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
            />
          </div>

          {/* Footer Actions */}
          <div className="flex justify-end space-x-3 pt-3 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              disabled={isSaving}
              className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
            >
              取消
            </button>
            <button
              type="submit"
              disabled={isSaving || !url.trim() || !title.trim()}
              className="px-5 py-2 text-xs font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center space-x-1.5 disabled:opacity-50 shadow-sm"
            >
              {isSaving && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
              <span>{initialLink ? "更新链接" : "保存入库"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
