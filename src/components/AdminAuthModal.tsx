"use client";

import React, { useState } from "react";
import { Lock, Unlock, X, KeyRound } from "lucide-react";

interface AdminAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  isAdmin: boolean;
  onAuthenticate: (password: string) => boolean;
  onLogout: () => void;
}

export default function AdminAuthModal({
  isOpen,
  onClose,
  isAdmin,
  onAuthenticate,
  onLogout,
}: AdminAuthModalProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;

    const ok = onAuthenticate(password.trim());
    if (ok) {
      setPassword("");
      setError(false);
      onClose();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-sm overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center space-x-2">
            {isAdmin ? (
              <Unlock className="w-5 h-5 text-emerald-600" />
            ) : (
              <Lock className="w-5 h-5 text-blue-600" />
            )}
            <h3 className="font-semibold text-slate-800 dark:text-slate-100">
              {isAdmin ? "管理员模式已开启" : "管理员身份验证"}
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
          {isAdmin ? (
            <div className="space-y-4">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                当前已处于管理员状态，可自由添加、编辑、删除链接与分类。
              </p>
              <div className="flex justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
                >
                  继续管理
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onLogout();
                    onClose();
                  }}
                  className="px-4 py-2 text-xs font-medium bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  退出管理模式
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                请输入管理员口令以解锁添加、编辑链接及目录整理权限。
              </p>

              <div>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="password"
                    required
                    autoFocus
                    placeholder="请输入管理口令"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError(false);
                    }}
                    className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border ${
                      error
                        ? "border-red-500 focus:ring-red-500"
                        : "border-slate-300 dark:border-slate-700 focus:ring-blue-500"
                    } bg-white dark:bg-slate-800 focus:outline-none focus:ring-2`}
                  />
                </div>
                {error && (
                  <p className="text-xs text-red-500 mt-1">管理口令不匹配，请重试</p>
                )}
              </div>

              <div className="flex justify-end space-x-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
                >
                  取消
                </button>
                <button
                  type="submit"
                  disabled={!password.trim()}
                  className="px-5 py-2 text-xs font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                >
                  解锁权限
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
