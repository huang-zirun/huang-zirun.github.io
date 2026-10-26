"use client";

import React, { useState, useEffect } from "react";
import { Lock, Unlock, X, KeyRound, ExternalLink, ShieldCheck } from "lucide-react";

interface AdminAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  isAdmin: boolean;
  onSaveToken: (token: string) => void;
  onEnableLocalOnly: () => void;
  onLogout: () => void;
  currentToken: string;
}

export default function AdminAuthModal({
  isOpen,
  onClose,
  isAdmin,
  onSaveToken,
  onEnableLocalOnly,
  onLogout,
  currentToken,
}: AdminAuthModalProps) {
  const [token, setToken] = useState(currentToken);

  useEffect(() => {
    setToken(currentToken);
  }, [currentToken, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!token.trim()) return;
    onSaveToken(token.trim());
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center space-x-2">
            {isAdmin ? (
              <Unlock className="w-5 h-5 text-emerald-600" />
            ) : (
              <Lock className="w-5 h-5 text-blue-600" />
            )}
            <h3 className="font-semibold text-slate-800 dark:text-slate-100">
              {isAdmin ? "管理员设置 (已解锁)" : "管理权限与 GitHub 认证"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              为了将您在网页端添加或修改的导航链接**直接保存并自动部署到 GitHub Pages**，请提供具有 <code className="text-blue-600 bg-blue-50 dark:bg-blue-950 px-1 py-0.5 rounded">repo</code> 权限的 GitHub Personal Access Token。
            </p>

            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                GitHub Token (Personal Access Token)
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="password"
                  placeholder="ghp_xxxx 或 github_pat_xxxx"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                />
              </div>
              <div className="mt-1.5 flex items-center justify-between text-[11px] text-slate-400">
                <span>Token 仅安全保存在您的本地浏览器</span>
                <a
                  href="https://github.com/settings/tokens/new?scopes=repo&description=CherryNav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center space-x-0.5"
                >
                  <span>创建 Token</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              {isAdmin ? (
                <button
                  type="button"
                  onClick={() => {
                    onLogout();
                    onClose();
                  }}
                  className="text-xs text-red-600 hover:underline"
                >
                  清除 Token 并锁定
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    onEnableLocalOnly();
                    onClose();
                  }}
                  className="text-xs text-slate-500 hover:text-slate-700 hover:underline"
                >
                  跳过 (仅本地临时编辑)
                </button>
              )}

              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3 py-1.5 text-xs text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
                >
                  取消
                </button>
                <button
                  type="submit"
                  disabled={!token.trim()}
                  className="px-4 py-1.5 text-xs font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 flex items-center space-x-1"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>保存并解锁</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
