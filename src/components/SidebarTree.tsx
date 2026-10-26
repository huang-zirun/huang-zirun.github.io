"use client";

import React, { useState } from "react";
import { CategoryNode } from "@/types/nav";
import { countLinksRecursive } from "@/lib/tree-utils";
import {
  ChevronRight,
  ChevronDown,
  Folder,
  FolderOpen,
  Plus,
  Edit2,
  Trash2,
  ChevronUp,
  FolderTree,
  ChevronsUpDown,
} from "lucide-react";

interface SidebarTreeProps {
  root: CategoryNode;
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
  isAdmin: boolean;
  onAddCategory: (parentId: string) => void;
  onEditCategory: (id: string, currentTitle: string) => void;
  onDeleteCategory: (id: string, title: string) => void;
  onMoveCategory: (id: string, direction: "up" | "down") => void;
}

export default function SidebarTree({
  root,
  activeCategoryId,
  onSelectCategory,
  isAdmin,
  onAddCategory,
  onEditCategory,
  onDeleteCategory,
  onMoveCategory,
}: SidebarTreeProps) {
  // Track open/collapsed state of category IDs
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => {
    // Default: expand root and top-level categories
    const initial = new Set<string>();
    initial.add(root.id);
    root.children.forEach((c) => initial.add(c.id));
    return initial;
  });

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    const all = new Set<string>();
    function collect(node: CategoryNode) {
      all.add(node.id);
      node.children.forEach(collect);
    }
    collect(root);
    setExpandedIds(all);
  };

  const collapseAll = () => {
    setExpandedIds(new Set([root.id]));
  };

  // Render a single node recursively
  const renderNode = (node: CategoryNode, depth = 0, isFirst = false, isLast = false) => {
    const isExpanded = expandedIds.has(node.id);
    const hasChildren = node.children.length > 0;
    const isActive = activeCategoryId === node.id;
    const linkCount = countLinksRecursive(node);
    const isRoot = node.id === root.id;

    return (
      <div key={node.id} className="select-none text-sm">
        <div
          onClick={() => onSelectCategory(node.id)}
          style={{ paddingLeft: `${Math.max(8, depth * 14)}px` }}
          className={`group flex items-center justify-between py-1.5 pr-2 rounded-md cursor-pointer transition-colors ${
            isActive
              ? "bg-blue-100 text-blue-900 font-medium dark:bg-blue-950 dark:text-blue-200"
              : "text-slate-700 hover:bg-slate-200/60 dark:text-slate-300 dark:hover:bg-slate-800/60"
          }`}
        >
          {/* Left item: Arrow + Folder Icon + Title */}
          <div className="flex items-center space-x-1.5 min-w-0 flex-1">
            {hasChildren ? (
              <button
                type="button"
                onClick={(e) => toggleExpand(node.id, e)}
                className="p-0.5 rounded hover:bg-slate-300/50 dark:hover:bg-slate-700 text-slate-500"
              >
                {isExpanded ? (
                  <ChevronDown className="w-3.5 h-3.5" />
                ) : (
                  <ChevronRight className="w-3.5 h-3.5" />
                )}
              </button>
            ) : (
              <span className="w-4 h-4 inline-block" />
            )}

            {isExpanded && hasChildren ? (
              <FolderOpen className="w-4 h-4 text-amber-500 flex-shrink-0" />
            ) : (
              <Folder className="w-4 h-4 text-amber-500 flex-shrink-0" />
            )}

            <span className="truncate" title={node.title}>
              {node.title}
            </span>
          </div>

          {/* Right item: Link Count Badge + Admin Actions */}
          <div className="flex items-center space-x-1 flex-shrink-0">
            {/* Badge */}
            <span
              className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                isActive
                  ? "bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                  : "bg-slate-200/70 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
              }`}
            >
              {linkCount}
            </span>

            {/* Admin Action buttons shown on hover */}
            {isAdmin && (
              <div
                className="hidden group-hover:flex items-center space-x-0.5 ml-1"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  title="添加子分类"
                  onClick={() => onAddCategory(node.id)}
                  className="p-1 rounded hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"
                >
                  <Plus className="w-3 h-3" />
                </button>

                {!isRoot && (
                  <>
                    <button
                      title="重命名"
                      onClick={() => onEditCategory(node.id, node.title)}
                      className="p-1 rounded hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"
                    >
                      <Edit2 className="w-3 h-3" />
                    </button>
                    {!isFirst && (
                      <button
                        title="上移"
                        onClick={() => onMoveCategory(node.id, "up")}
                        className="p-1 rounded hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"
                      >
                        <ChevronUp className="w-3 h-3" />
                      </button>
                    )}
                    {!isLast && (
                      <button
                        title="下移"
                        onClick={() => onMoveCategory(node.id, "down")}
                        className="p-1 rounded hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"
                      >
                        <ChevronDown className="w-3 h-3" />
                      </button>
                    )}
                    <button
                      title="删除分类"
                      onClick={() => onDeleteCategory(node.id, node.title)}
                      className="p-1 rounded hover:bg-red-200 dark:hover:bg-red-900/50 text-red-600"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Recursive Children */}
        {hasChildren && isExpanded && (
          <div className="relative">
            <div className="absolute left-[13px] top-0 bottom-1 w-px bg-slate-200 dark:bg-slate-800" />
            <div className="space-y-0.5 mt-0.5">
              {node.children.map((child, idx) =>
                renderNode(
                  child,
                  depth + 1,
                  idx === 0,
                  idx === node.children.length - 1
                )
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="w-64 md:w-72 flex-shrink-0 flex flex-col h-full border-r border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 select-none">
      {/* Header */}
      <div className="h-14 px-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center space-x-2 font-semibold text-slate-800 dark:text-slate-100">
          <FolderTree className="w-4 h-4 text-blue-600" />
          <span>目录大纲</span>
        </div>
        <div className="flex items-center space-x-1">
          <button
            onClick={expandAll}
            title="全部展开"
            className="text-xs px-1.5 py-1 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 rounded hover:bg-slate-200/50 dark:hover:bg-slate-800"
          >
            展开
          </button>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <button
            onClick={collapseAll}
            title="全部收起"
            className="text-xs px-1.5 py-1 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 rounded hover:bg-slate-200/50 dark:hover:bg-slate-800"
          >
            收起
          </button>
          {isAdmin && (
            <button
              onClick={() => onAddCategory(root.id)}
              title="在根目录新建分类"
              className="ml-1 p-1 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/40 rounded"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Tree View Scroll Area */}
      <div className="flex-1 overflow-y-auto p-2 space-y-0.5">
        {renderNode(root, 0, true, true)}
      </div>

      {/* Bottom info */}
      <div className="p-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-400 dark:text-slate-500 flex items-center justify-between">
        <span>Cherry Nav</span>
        <span>共 {countLinksRecursive(root)} 个链接</span>
      </div>
    </aside>
  );
}
