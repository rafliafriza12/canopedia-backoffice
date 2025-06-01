import { NextResponse } from "next/server";
import Tree from "@/models/Tree";
import { Types } from "mongoose";

export async function getAllTrees(query: any = {}) {
  try {
    const trees = await Tree.find(query).sort({ createdAt: -1 });
    return { success: true, data: trees };
  } catch (error) {
    console.error("Error in getAllTrees:", error);
    return { success: false, error: "Gagal mengambil data pohon" };
  }
}

export async function getTreeById(id: string) {
  try {
    if (!Types.ObjectId.isValid(id)) {
      return { success: false, error: "ID pohon tidak valid" };
    }

    const tree = await Tree.findById(id);
    if (!tree) {
      return { success: false, error: "Pohon tidak ditemukan" };
    }

    return { success: true, data: tree };
  } catch (error) {
    console.error("Error in getTreeById:", error);
    return { success: false, error: "Gagal mengambil data pohon" };
  }
}

export async function createTree(data: any) {
  try {
    const tree = await Tree.create(data);
    return { success: true, data: tree };
  } catch (error) {
    console.error("Error in createTree:", error);
    return { success: false, error: "Gagal menambahkan pohon" };
  }
}

export async function updateTree(id: string, data: any) {
  try {
    if (!Types.ObjectId.isValid(id)) {
      return { success: false, error: "ID pohon tidak valid" };
    }

    const tree = await Tree.findByIdAndUpdate(
      id,
      { ...data, updatedAt: new Date() },
      { new: true, runValidators: true }
    );

    if (!tree) {
      return { success: false, error: "Pohon tidak ditemukan" };
    }

    return { success: true, data: tree };
  } catch (error) {
    console.error("Error in updateTree:", error);
    return { success: false, error: "Gagal mengupdate pohon" };
  }
}

export async function deleteTree(id: string) {
  try {
    if (!Types.ObjectId.isValid(id)) {
      return { success: false, error: "ID pohon tidak valid" };
    }

    const tree = await Tree.findByIdAndDelete(id);
    if (!tree) {
      return { success: false, error: "Pohon tidak ditemukan" };
    }

    return { success: true, data: tree };
  } catch (error) {
    console.error("Error in deleteTree:", error);
    return { success: false, error: "Gagal menghapus pohon" };
  }
}

// Fungsi pencarian dan filter
export async function searchTrees(query: any) {
  try {
    const { search, status, family } = query;
    const filter: any = {};

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { scientificName: { $regex: search, $options: "i" } },
      ];
    }

    if (status) {
      filter.status = status;
    }

    if (family) {
      filter.family = family;
    }

    const trees = await Tree.find(filter).sort({ createdAt: -1 });
    return { success: true, data: trees };
  } catch (error) {
    console.error("Error in searchTrees:", error);
    return { success: false, error: "Gagal mencari data pohon" };
  }
}
