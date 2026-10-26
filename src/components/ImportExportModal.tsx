"use client";

import React, { useState } from "react";
import { NavData, CategoryNode } from "@/types/nav";
import { parseNetscapeBookmarks, exportToNetscapeHTML } from "@/lib/bookmark-parser";
import { X, Download, Upload, FileJson, FileCode, CheckCircle2 } from "lucide-react";

interface ImportExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: NavData;
  onImport: (newRoot: CategoryNode, mode: "merge" | "replace") => Promise<void>;
  isAdmin: boolean;
}

export default function ImportExportModal({
  isOpen,
  onClose,
  data,
  onImport,
  isAdmin,
}: ImportExportModalProps) {
  const [activeTab, setActiveTab] = useState<"export" | "import">("export");
  const [importFile, setImportFile] = useState<File | null>(null);
  const [importMode, setImportMode] = useState<"merge" | "replace">("merge");
  const [isProcessing, setIsProcessing] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleExportJSON = () => {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `nav-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleExportHTML = () => {
    const htmlStr = exportToNetscapeHTML(data.root);
    const blob = new Blob([htmlStr], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `bookmarks-${new Date().toISOString().slice(0, 10)}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!importFile) return;

    setIsProcessing(true);
    setSuccessMsg(null);

    try {
      const text = await importFile.text();
      let importedRoot: CategoryNode;

      if (importFile.name.endsWith(".json")) {
        const parsed = JSON.parse(text);
        if (parsed.root) {
          importedRoot = parsed.root;
        } else if (parsed.children || parsed.links) {
          importedRoot = parsed;
        } else {
          throw new Error("无效的导航 JSON 格式");
        }
      } else {
        // Assume Netscape HTML
        importedRoot = parseNetscapeBookmarks(text);
      }

      await onImport(importedRoot, importMode);
      setSuccessMsg("导入成功！");
      setTimeout(() => {
        onClose();
      }, 1200);
    } catch (err) {
      alert("导入失败: " + (err instanceof Error ? err.message : "无法解析文件"));
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab("export")}
              className={`text-sm font-semibold pb-1 border-b-2 transition ${
                activeTab === "export"
                  ? "border-blue-600 text-blue-600 dark:text-blue-400"
                  : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              导出备份
            </button>
            <button
              onClick={() => setActiveTab("import")}
              className={`text-sm font-semibold pb-1 border-b-2 transition ${
                activeTab === "import"
                  ? "border-blue-600 text-blue-600 dark:text-blue-400"
                  : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              导入书签
            </button>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {activeTab === "export" ? (
            <div className="space-y-4">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                可随时将您的导航目录和网址导出为本地备份或导入到其他浏览器。
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleExportJSON}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 bg-slate-50 dark:bg-slate-800/50 flex flex-col items-center justify-center space-y-2 group transition"
                >
                  <FileJson className="w-8 h-8 text-blue-500 group-hover:scale-105 transition" />
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
                    完整数据 JSON
                  </span>
                  <span className="text-[10px] text-slate-400">备份所有层级</span>
                </button>

                <button
                  type="button"
                  onClick={handleExportHTML}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-600 bg-slate-50 dark:bg-slate-800/50 flex flex-col items-center justify-center space-y-2 group transition"
                >
                  <FileCode className="w-8 h-8 text-emerald-500 group-hover:scale-105 transition" />
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
                    浏览器书签 HTML
                  </span>
                  <span className="text-[10px] text-slate-400">Chrome/Edge 兼容</span>
                </button>
              </div>
            </div>
          ) : (
            <div>
              {!isAdmin ? (
                <div className="text-center py-6 text-sm text-slate-500">
                  导入书签为管理操作，请先开启管理员权限。
                </div>
              ) : (
                <form onSubmit={handleImportSubmit} className="space-y-4">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    支持从 Chrome、Edge、Firefox 导出的书签 HTML，或此站导出的 JSON。
                  </p>

                  <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-5 text-center">
                    <input
                      type="file"
                      accept=".html,.htm,.json"
                      onChange={(e) => setImportFile(e.target.files?.[0] || null)}
                      className="hidden"
                      id="bookmark-file-input"
                    />
                    <label
                      htmlFor="bookmark-file-input"
                      className="cursor-pointer flex flex-col items-center justify-center"
                    >
                      <Upload className="w-6 h-6 text-slate-400 mb-2" />
                      <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                        {importFile ? importFile.name : "点击选择文件 (.html / .json)"}
                      </span>
                    </label>
                  </div>

                  <div className="space-y-2 pt-1">
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-300">
                      导入模式
                    </label>
                    <div className="flex space-x-4 text-xs text-slate-700 dark:text-slate-300">
                      <label className="flex items-center space-x-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="mode"
                          checked={importMode === "merge"}
                          onChange={() => setImportMode("merge")}
                          className="text-blue-600"
                        />
                        <span>合并到现有分类下</span>
                      </label>
                      <label className="flex items-center space-x-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="mode"
                          checked={importMode === "replace"}
                          onChange={() => setImportMode("replace")}
                          className="text-blue-600"
                        />
                        <span>覆盖现有所有目录</span>
                      </label>
                    </div>
                  </div>

                  {successMsg && (
                    <div className="flex items-center space-x-1.5 text-xs text-emerald-600">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{successMsg}</span>
                    </div>
                  )}

                  <div className="flex justify-end space-x-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
                    >
                      取消
                    </button>
                    <button
                      type="submit"
                      disabled={!importFile || isProcessing}
                      className="px-5 py-2 text-xs font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                    >
                      {isProcessing ? "解析导入中..." : "开始导入"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
