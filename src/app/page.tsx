"use client";

import React, { useState, useEffect } from "react";
import initialNavData from "@/../data/nav-tree.json";
import { NavData, CategoryNode, LinkItem } from "@/types/nav";
import {
  insertLinkIntoCategory,
  updateLink,
  deleteLink,
  addCategory,
  updateCategory,
  deleteCategory,
  moveCategory,
} from "@/lib/tree-utils";
import { commitToGitHub } from "@/lib/github-sync";
import SidebarTree from "@/components/SidebarTree";
import ContentArea from "@/components/ContentArea";
import AddEditLinkModal from "@/components/AddEditLinkModal";
import AddEditCategoryModal from "@/components/AddEditCategoryModal";
import AdminAuthModal from "@/components/AdminAuthModal";
import ImportExportModal from "@/components/ImportExportModal";

export default function Home() {
  const [navData, setNavData] = useState<NavData>(() => initialNavData as NavData);
  const [activeCategoryId, setActiveCategoryId] = useState<string>(() => initialNavData.root.id);

  // Admin and GitHub Token state
  const [isAdmin, setIsAdmin] = useState(false);
  const [githubToken, setGithubToken] = useState("");

  // Dark Mode state
  const [darkMode, setDarkMode] = useState(false);

  // Modals state
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [editingLink, setEditingLink] = useState<LinkItem | null>(null);

  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);
  const [editingCategoryTitle, setEditingCategoryTitle] = useState("");
  const [categoryParentId, setCategoryParentId] = useState(initialNavData.root.id);

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isImportExportOpen, setIsImportExportOpen] = useState(false);

  // Initialize Admin Token and cached data from localStorage
  useEffect(() => {
    // 1. Check local cache
    const cachedTree = localStorage.getItem("nav_local_tree_cache");
    if (cachedTree) {
      try {
        const parsed = JSON.parse(cachedTree);
        if (parsed.root && parsed.updatedAt >= initialNavData.updatedAt) {
          setNavData(parsed);
        }
      } catch {
        // ignore
      }
    }

    // 2. Check saved GitHub Token
    const savedToken = localStorage.getItem("nav_github_token");
    if (savedToken) {
      setIsAdmin(true);
      setGithubToken(savedToken);
    }

    // 3. Check theme preference
    const savedTheme = localStorage.getItem("nav_theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("nav_theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("nav_theme", "light");
      }
      return next;
    });
  };

  // Keyboard shortcut: Cmd+K / Ctrl+K focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
        if (searchInput) searchInput.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Save changes to local state, localStorage cache, and GitHub API
  const persistChanges = async (updatedData: NavData) => {
    // 1. Optimistic UI update
    setNavData(updatedData);

    // 2. Local cache update
    try {
      localStorage.setItem("nav_local_tree_cache", JSON.stringify(updatedData));
    } catch {
      // ignore
    }

    // 3. Commit to GitHub repo if token is configured
    if (githubToken) {
      try {
        await commitToGitHub(updatedData, githubToken);
      } catch (err) {
        alert("提交至 GitHub 仓库失败: " + (err instanceof Error ? err.message : "请检查网络或 Token 权限"));
      }
    }
  };

  // --- Category Handlers ---
  const handleOpenAddCategory = (parentId: string) => {
    setEditingCategoryId(null);
    setEditingCategoryTitle("");
    setCategoryParentId(parentId);
    setIsCategoryModalOpen(true);
  };

  const handleOpenEditCategory = (id: string, currentTitle: string) => {
    setEditingCategoryId(id);
    setEditingCategoryTitle(currentTitle);
    setIsCategoryModalOpen(true);
  };

  const handleSaveCategory = async (title: string, parentId?: string) => {
    const cloned = JSON.parse(JSON.stringify(navData)) as NavData;

    if (editingCategoryId) {
      updateCategory(cloned.root, editingCategoryId, title);
    } else if (parentId) {
      const newCategory: CategoryNode = {
        id: "cat-" + Math.random().toString(36).substring(2, 9),
        title,
        children: [],
        links: [],
      };
      addCategory(cloned.root, parentId, newCategory);
      setActiveCategoryId(newCategory.id);
    }

    await persistChanges(cloned);
  };

  const handleDeleteCategory = async (id: string, title: string) => {
    if (!confirm(`确定要删除分类【${title}】及其下所有子节点和链接吗？此操作不可撤销。`)) {
      return;
    }
    const cloned = JSON.parse(JSON.stringify(navData)) as NavData;
    deleteCategory(cloned.root, id);
    if (activeCategoryId === id) {
      setActiveCategoryId(cloned.root.id);
    }
    await persistChanges(cloned);
  };

  const handleMoveCategory = async (id: string, direction: "up" | "down") => {
    const cloned = JSON.parse(JSON.stringify(navData)) as NavData;
    moveCategory(cloned.root, id, direction);
    await persistChanges(cloned);
  };

  // --- Link Handlers ---
  const handleOpenAddLink = () => {
    setEditingLink(null);
    setIsLinkModalOpen(true);
  };

  const handleOpenEditLink = (link: LinkItem) => {
    setEditingLink(link);
    setIsLinkModalOpen(true);
  };

  const handleSaveLink = async (link: LinkItem, targetCatId: string) => {
    const cloned = JSON.parse(JSON.stringify(navData)) as NavData;

    if (editingLink) {
      updateLink(cloned.root, editingLink.id, link, targetCatId);
    } else {
      insertLinkIntoCategory(cloned.root, targetCatId, link);
    }

    await persistChanges(cloned);
  };

  const handleDeleteLink = async (linkId: string, title: string) => {
    if (!confirm(`确定要删除链接【${title}】吗？`)) {
      return;
    }
    const cloned = JSON.parse(JSON.stringify(navData)) as NavData;
    deleteLink(cloned.root, linkId);
    await persistChanges(cloned);
  };

  // --- Import / Export Handlers ---
  const handleImport = async (newRoot: CategoryNode, mode: "merge" | "replace") => {
    const cloned = JSON.parse(JSON.stringify(navData)) as NavData;

    if (mode === "replace") {
      cloned.root.children = newRoot.children;
      cloned.root.links = newRoot.links;
    } else {
      cloned.root.children.push(...newRoot.children);
      cloned.root.links.push(...newRoot.links);
    }

    await persistChanges(cloned);
  };

  // --- Auth Handlers ---
  const handleSaveToken = (token: string) => {
    setIsAdmin(true);
    setGithubToken(token);
    localStorage.setItem("nav_github_token", token);
  };

  const handleEnableLocalOnly = () => {
    setIsAdmin(true);
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setGithubToken("");
    localStorage.removeItem("nav_github_token");
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-100 dark:bg-slate-950">
      {/* Left Sidebar Tree */}
      <SidebarTree
        root={navData.root}
        activeCategoryId={activeCategoryId}
        onSelectCategory={setActiveCategoryId}
        isAdmin={isAdmin}
        onAddCategory={handleOpenAddCategory}
        onEditCategory={handleOpenEditCategory}
        onDeleteCategory={handleDeleteCategory}
        onMoveCategory={handleMoveCategory}
      />

      {/* Right Content Area */}
      <ContentArea
        root={navData.root}
        activeCategoryId={activeCategoryId}
        onSelectCategory={setActiveCategoryId}
        isAdmin={isAdmin}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onAddLink={handleOpenAddLink}
        onEditLink={handleOpenEditLink}
        onDeleteLink={handleDeleteLink}
        onAddSubCategory={handleOpenAddCategory}
        onOpenImportExport={() => setIsImportExportOpen(true)}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      {/* Add / Edit Link Modal */}
      <AddEditLinkModal
        isOpen={isLinkModalOpen}
        onClose={() => setIsLinkModalOpen(false)}
        onSave={handleSaveLink}
        initialLink={editingLink}
        defaultCategoryId={activeCategoryId}
        rootCategory={navData.root}
      />

      {/* Add / Edit Category Modal */}
      <AddEditCategoryModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        onSave={handleSaveCategory}
        initialTitle={editingCategoryTitle}
        defaultParentId={categoryParentId}
        rootCategory={navData.root}
        isEditing={Boolean(editingCategoryId)}
      />

      {/* Admin Auth Modal */}
      <AdminAuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        isAdmin={isAdmin}
        onSaveToken={handleSaveToken}
        onEnableLocalOnly={handleEnableLocalOnly}
        onLogout={handleLogout}
        currentToken={githubToken}
      />

      {/* Import / Export Modal */}
      <ImportExportModal
        isOpen={isImportExportOpen}
        onClose={() => setIsImportExportOpen(false)}
        data={navData}
        onImport={handleImport}
        isAdmin={isAdmin}
      />
    </div>
  );
}
