"use client";

import React, { useState, useEffect } from "react";
import { CategoryNode } from "@/types/nav";
import { flattenAllCategories } from "@/lib/tree-utils";
import { X, FolderPlus } from "lucide-react";

interface AddEditCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (title: string, parentId?: string) => Promise<void>;
  initialTitle?: string;
  defaultParentId: string;
  rootCategory: CategoryNode;
  isEditing?: boolean;
}

export default function AddEditCategoryModal({
  isOpen,
  onClose,
  onSave,
  initialTitle = "",
  defaultParentId,
  rootCategory,
  isEditing = false,
}: AddEditCategoryModalProps) {
  const [title, setTitle] = useState(initialTitle);
  const [parentId, setParentId] = useState(defaultParentId);
  const [isSaving, setIsSaving] = useState(false);

  const allCategories = flattenAllCategories(rootCategory);

  useEffect(() => {
    setTitle(initialTitle);
    setParentId(defaultParentId);
  }, [initialTitle, defaultParentId, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    setIsSaving(true);
    try {
      await onSave(title.trim(), isEditing ? undefined : parentId);
      onClose();
    } catch (err) {
      alert("保存失败: " + (err instanceof Error ? err.message : "未知错误"));
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center space-x-2">
            <FolderPlus className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-slate-800 dark:text-slate-100">
              {isEditing ? "重命名分类" : "新建子分类"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
              分类名称 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              autoFocus
              placeholder="例如: 深度学习、常用工具"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {!isEditing && (
            <div>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                父级分类目录
              </label>
              <select
                value={parentId}
                onChange={(e) => setParentId(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {allCategories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
          )}

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
              disabled={isSaving || !title.trim()}
              className="px-5 py-2 text-xs font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 shadow-sm"
            >
              {isEditing ? "保存" : "创建分类"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
