import { CategoryNode, LinkItem } from "@/types/nav";

export function findCategoryById(root: CategoryNode, id: string): CategoryNode | null {
  if (root.id === id) return root;
  for (const child of root.children) {
    const found = findCategoryById(child, id);
    if (found) return found;
  }
  return null;
}

export function findParentCategory(root: CategoryNode, targetId: string): CategoryNode | null {
  for (const child of root.children) {
    if (child.id === targetId) return root;
    const found = findParentCategory(child, targetId);
    if (found) return found;
  }
  return null;
}

export function getCategoryPath(root: CategoryNode, targetId: string): CategoryNode[] {
  if (root.id === targetId) return [root];

  for (const child of root.children) {
    const path = getCategoryPath(child, targetId);
    if (path.length > 0) {
      return [root, ...path];
    }
  }

  return [];
}

export function countLinksRecursive(node: CategoryNode): number {
  let count = node.links.length;
  for (const child of node.children) {
    count += countLinksRecursive(child);
  }
  return count;
}

export interface FlattenedLink {
  link: LinkItem;
  category: CategoryNode;
  categoryPath: string;
}

export function getAllLinks(root: CategoryNode, currentPath = ""): FlattenedLink[] {
  const path = currentPath ? `${currentPath} / ${root.title}` : root.title;
  let results: FlattenedLink[] = root.links.map((link) => ({
    link,
    category: root,
    categoryPath: path,
  }));

  for (const child of root.children) {
    results = results.concat(getAllLinks(child, path));
  }

  return results;
}

export function insertLinkIntoCategory(
  root: CategoryNode,
  categoryId: string,
  link: LinkItem
): boolean {
  const target = findCategoryById(root, categoryId);
  if (!target) return false;
  target.links.unshift(link);
  return true;
}

export function updateLink(
  root: CategoryNode,
  linkId: string,
  updatedData: Partial<LinkItem>,
  newCategoryId?: string
): boolean {
  function removeAndFind(node: CategoryNode): LinkItem | null {
    const index = node.links.findIndex((l) => l.id === linkId);
    if (index !== -1) {
      const removed = node.links.splice(index, 1)[0];
      return removed;
    }
    for (const child of node.children) {
      const found = removeAndFind(child);
      if (found) return found;
    }
    return null;
  }

  // If changing category
  if (newCategoryId) {
    const original = removeAndFind(root);
    if (!original) return false;
    const merged = { ...original, ...updatedData };
    return insertLinkIntoCategory(root, newCategoryId, merged);
  }

  // Update in place
  function findAndUpdate(node: CategoryNode): boolean {
    const link = node.links.find((l) => l.id === linkId);
    if (link) {
      Object.assign(link, updatedData);
      return true;
    }
    for (const child of node.children) {
      if (findAndUpdate(child)) return true;
    }
    return false;
  }

  return findAndUpdate(root);
}

export function deleteLink(root: CategoryNode, linkId: string): boolean {
  const index = root.links.findIndex((l) => l.id === linkId);
  if (index !== -1) {
    root.links.splice(index, 1);
    return true;
  }
  for (const child of root.children) {
    if (deleteLink(child, linkId)) return true;
  }
  return false;
}

export function addCategory(
  root: CategoryNode,
  parentId: string,
  newCategory: CategoryNode
): boolean {
  const parent = findCategoryById(root, parentId);
  if (!parent) return false;
  parent.children.push(newCategory);
  return true;
}

export function updateCategory(
  root: CategoryNode,
  categoryId: string,
  newTitle: string
): boolean {
  const target = findCategoryById(root, categoryId);
  if (!target) return false;
  target.title = newTitle;
  return true;
}

export function deleteCategory(root: CategoryNode, categoryId: string): boolean {
  if (root.id === categoryId) return false; // cannot delete root
  const index = root.children.findIndex((c) => c.id === categoryId);
  if (index !== -1) {
    root.children.splice(index, 1);
    return true;
  }
  for (const child of root.children) {
    if (deleteCategory(child, categoryId)) return true;
  }
  return false;
}

export function moveCategory(
  root: CategoryNode,
  categoryId: string,
  direction: "up" | "down"
): boolean {
  const parent = findParentCategory(root, categoryId);
  if (!parent) return false;

  const idx = parent.children.findIndex((c) => c.id === categoryId);
  if (idx === -1) return false;

  if (direction === "up" && idx > 0) {
    const temp = parent.children[idx];
    parent.children[idx] = parent.children[idx - 1];
    parent.children[idx - 1] = temp;
    return true;
  }

  if (direction === "down" && idx < parent.children.length - 1) {
    const temp = parent.children[idx];
    parent.children[idx] = parent.children[idx + 1];
    parent.children[idx + 1] = temp;
    return true;
  }

  return false;
}

export function flattenAllCategories(root: CategoryNode, prefix = ""): { id: string; label: string }[] {
  const label = prefix ? `${prefix} / ${root.title}` : root.title;
  let list = [{ id: root.id, label }];
  for (const child of root.children) {
    list = list.concat(flattenAllCategories(child, label));
  }
  return list;
}
