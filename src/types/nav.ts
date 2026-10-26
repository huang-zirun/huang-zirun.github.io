export interface LinkItem {
  id: string;
  title: string;
  url: string;
  favicon: string;
  description?: string;
  tags?: string[];
  createdAt?: string;
}

export interface CategoryNode {
  id: string;
  title: string;
  icon?: string;
  children: CategoryNode[];
  links: LinkItem[];
}

export interface NavData {
  version: string;
  updatedAt: string;
  root: CategoryNode;
}

export interface ParseLinkResult {
  title: string;
  url: string;
  favicon: string;
  description: string;
}
