"use client";

import React, { useState } from "react";
import { CategoryNode, LinkItem } from "@/types/nav";
import { getCategoryPath, getAllLinks, FlattenedLink } from "@/lib/tree-utils";
import {
  Search,
  Plus,
  ExternalLink,
  Edit2,
  Trash2,
  Lock,
  Unlock,
  Moon,
  Sun,
  Download,
  Folder,
  Tag,
  Globe,
  CornerDownRight,
  ChevronRight,
  FolderPlus,
} from "lucide-react";

interface ContentAreaProps {
  root: CategoryNode;
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
  isAdmin: boolean;
  onOpenAuth: () => void;
  onAddLink: () => void;
  onEditLink: (link: LinkItem) => void;
  onDeleteLink: (linkId: string, title: string) => void;
  onAddSubCategory: (parentId: string) => void;
  onOpenImportExport: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function ContentArea({
  root,
  activeCategoryId,
  onSelectCategory,
  isAdmin,
  onOpenAuth,
  onAddLink,
  onEditLink,
  onDeleteLink,
  onAddSubCategory,
  onOpenImportExport,
  darkMode,
  onToggleDarkMode,
}: ContentAreaProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const path = getCategoryPath(root, activeCategoryId);
  const currentCategory = path[path.length - 1] || root;

  // Search results across entire tree
  const allLinks = getAllLinks(root);
  const filteredLinks: FlattenedLink[] = searchQuery.trim()
    ? allLinks.filter((item) => {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = item.link.title.toLowerCase().includes(q);
        const inUrl = item.link.url.toLowerCase().includes(q);
        const inDesc = item.link.description?.toLowerCase().includes(q);
        const inTags = item.link.tags?.some((t) => t.toLowerCase().includes(q));
        const inCat = item.categoryPath.toLowerCase().includes(q);
        return inTitle || inUrl || inDesc || inTags || inCat;
      })
    : [];

  const getDomain = (url: string) => {
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch {
      return "";
    }
  };

  return (
    <main className="flex-1 flex flex-col h-full overflow-hidden bg-white dark:bg-slate-950">
      {/* Top Navigation Bar */}
      <header className="h-14 px-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 flex-shrink-0">
        {/* Breadcrumb Path */}
        <div className="flex items-center space-x-1.5 text-xs text-slate-500 overflow-x-auto whitespace-nowrap py-1">
          {path.map((node, index) => {
            const isLast = index === path.length - 1;
            return (
              <React.Fragment key={node.id}>
                {index > 0 && <ChevronRight className="w-3 h-3 text-slate-400" />}
                <button
                  onClick={() => onSelectCategory(node.id)}
                  className={`hover:text-blue-600 transition flex items-center space-x-1 ${
                    isLast
                      ? "font-semibold text-slate-800 dark:text-slate-200"
                      : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {index === 0 && <Folder className="w-3.5 h-3.5 mr-0.5 text-blue-500" />}
                  <span>{node.title}</span>
                </button>
              </React.Fragment>
            );
          })}
        </div>

        {/* Search & Actions Bar */}
        <div className="flex items-center space-x-2">
          {/* Search Box */}
          <div className="relative w-44 sm:w-60">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            <input
              type="text"
              placeholder="搜索链接 / 标题 / 标签 (Cmd+K)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-7 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-800 dark:text-slate-100 placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-2 text-xs text-slate-400 hover:text-slate-600"
              >
                ×
              </button>
            )}
          </div>

          {/* Action Buttons */}
          {isAdmin && (
            <>
              <button
                onClick={onAddLink}
                className="px-2.5 py-1.5 text-xs font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center space-x-1 shadow-sm whitespace-nowrap"
              >
                <Plus className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">添加链接</span>
              </button>
              <button
                onClick={() => onAddSubCategory(currentCategory.id)}
                title="在此分类下新建子分类"
                className="p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-800 transition"
              >
                <FolderPlus className="w-4 h-4" />
              </button>
            </>
          )}

          {/* Import / Export */}
          <button
            onClick={onOpenImportExport}
            title="导入 / 导出书签"
            className="p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-800 transition"
          >
            <Download className="w-4 h-4" />
          </button>

          {/* Dark Mode */}
          <button
            onClick={onToggleDarkMode}
            title="切换主题"
            className="p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-800 transition"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Admin Lock / Unlock */}
          <button
            onClick={onOpenAuth}
            title={isAdmin ? "已解锁管理权限（点击退出）" : "点击验证管理员身份"}
            className={`p-1.5 rounded-lg border transition ${
              isAdmin
                ? "bg-emerald-50 border-emerald-300 text-emerald-600 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-400"
                : "border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            {isAdmin ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Main Content Scroll View */}
      <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
        {/* If searching */}
        {searchQuery.trim() ? (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                搜索结果：“{searchQuery}” ({filteredLinks.length})
              </h2>
            </div>

            {filteredLinks.length === 0 ? (
              <div className="text-center py-16 text-slate-400 text-sm">
                没有找到匹配的链接或网页
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
                {filteredLinks.map(({ link, categoryPath }) =>
                  renderLinkCard(link, categoryPath)
                )}
              </div>
            )}
          </div>
        ) : (
          <div>
            {/* Category Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center space-x-2">
                  <span>{currentCategory.title}</span>
                  <span className="text-xs font-normal text-slate-400 font-mono">
                    ({currentCategory.links.length} 个直属链接)
                  </span>
                </h1>
              </div>
            </div>

            {/* Sub-categories Quick Tags (if any) */}
            {currentCategory.children.length > 0 && (
              <div className="mb-6 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block mb-2">
                  子分类速达
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentCategory.children.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => onSelectCategory(sub.id)}
                      className="px-2.5 py-1 text-xs rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-400 dark:hover:border-blue-600 transition flex items-center space-x-1"
                    >
                      <CornerDownRight className="w-3 h-3 text-blue-500" />
                      <span>{sub.title}</span>
                      <span className="text-[10px] text-slate-400">({sub.links.length})</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Links Grid */}
            {currentCategory.links.length === 0 ? (
              <div className="text-center py-16 border-2 border-dashed border-slate-200 dark:border-slate-800/80 rounded-xl">
                <Globe className="w-10 h-10 text-slate-300 dark:text-slate-700 mx-auto mb-2" />
                <p className="text-sm text-slate-400">该分类下暂无链接</p>
                {isAdmin ? (
                  <button
                    onClick={onAddLink}
                    className="mt-3 px-3 py-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 bg-blue-50 dark:bg-blue-950 rounded-md border border-blue-200 dark:border-blue-900 transition"
                  >
                    + 立即添加第一个链接
                  </button>
                ) : (
                  <p className="text-xs text-slate-400 mt-1">请开启管理员模式以添加内容</p>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
                {currentCategory.links.map((link) => renderLinkCard(link))}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );

  function renderLinkCard(link: LinkItem, categoryPath?: string) {
    const domain = getDomain(link.url);

    return (
      <div
        key={link.id}
        className="group relative p-3.5 rounded-xl border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-slate-900/70 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-sm transition flex flex-col justify-between"
      >
        <div>
          {/* Header: Favicon + Title + Open Link */}
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <div className="flex items-center space-x-2.5 min-w-0">
              <div className="w-7 h-7 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={link.favicon}
                  alt=""
                  className="w-4 h-4 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2364748b' viewBox='0 0 16 16'><circle cx='8' cy='8' r='7'/></svg>";
                  }}
                />
              </div>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.title}
                className="font-medium text-sm text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 truncate"
              >
                {link.title}
              </a>
            </div>

            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-600 flex-shrink-0"
              title="在新标签页中打开"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Domain & Category Path */}
          <div className="flex items-center space-x-1.5 text-[11px] text-slate-400 mb-2">
            <span className="font-mono truncate">{domain}</span>
            {categoryPath && (
              <>
                <span>•</span>
                <span className="text-slate-500 dark:text-slate-400 truncate max-w-[120px]">
                  {categoryPath}
                </span>
              </>
            )}
          </div>

          {/* Description */}
          {link.description && (
            <p
              title={link.description}
              className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed mb-2.5"
            >
              {link.description}
            </p>
          )}
        </div>

        {/* Footer: Tags & Admin Controls */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs">
          {/* Tags */}
          <div className="flex items-center space-x-1 overflow-x-auto min-w-0 pr-1">
            {link.tags && link.tags.length > 0 ? (
              link.tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                >
                  <Tag className="w-2.5 h-2.5 mr-0.5 opacity-60" />
                  {tag}
                </span>
              ))
            ) : (
              <span />
            )}
          </div>

          {/* Admin Edit/Delete Buttons */}
          {isAdmin && (
            <div className="flex items-center space-x-1 flex-shrink-0">
              <button
                onClick={() => onEditLink(link)}
                title="编辑此链接"
                className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Edit2 className="w-3 h-3" />
              </button>
              <button
                onClick={() => onDeleteLink(link.id, link.title)}
                title="删除此链接"
                className="p-1 rounded text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
