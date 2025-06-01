"use client";

import { useState, useEffect } from "react";
import { Card, Button, Modal, Form, Input, Select, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";

interface Tree {
  _id: string;
  name: string;
  scientificName: string;
  description: string;
  habitat: string;
  usage: string;
  image: string;
  status: "Kritis" | "Terancam" | "Stabil";
  location: string;
  family: string;
}

export default function KatalogPage() {
  const [trees, setTrees] = useState<Tree[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const fetchTrees = async () => {
    try {
      const response = await fetch("/api/trees");
      const data = await response.json();
      setTrees(data);
    } catch (error) {
      message.error("Gagal memuat data pohon");
    }
  };

  useEffect(() => {
    fetchTrees();
  }, []);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const response = await fetch("/api/trees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Gagal menambahkan pohon");

      message.success("Berhasil menambahkan pohon");
      form.resetFields();
      setIsModalOpen(false);
      fetchTrees();
    } catch (error) {
      message.error("Gagal menambahkan pohon");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Katalog Pohon</h1>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setIsModalOpen(true)}
          className="bg-emerald-600 hover:bg-emerald-700"
        >
          Tambah Pohon
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trees.length > 0 &&
          trees?.map((tree) => (
            <Card
              key={tree._id}
              hoverable
              cover={
                tree.image ? (
                  <img
                    alt={tree.name}
                    src={tree.image}
                    className="h-48 w-full object-cover"
                  />
                ) : (
                  <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
                    No Image
                  </div>
                )
              }
              className="shadow-md"
            >
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">{tree.name}</h2>
                <p className="text-gray-600 italic">{tree.scientificName}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{tree.family}</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      tree.status === "Kritis"
                        ? "bg-red-100 text-red-800"
                        : tree.status === "Terancam"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {tree.status}
                  </span>
                </div>
              </div>
            </Card>
          ))}
      </div>

      <Modal
        title="Tambah Pohon Baru"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="mt-4"
        >
          <Form.Item
            name="name"
            label="Nama Pohon"
            rules={[{ required: true, message: "Nama pohon wajib diisi" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="scientificName"
            label="Nama Ilmiah"
            rules={[{ required: true, message: "Nama ilmiah wajib diisi" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="description"
            label="Deskripsi"
            rules={[{ required: true, message: "Deskripsi wajib diisi" }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item
            name="habitat"
            label="Habitat"
            rules={[{ required: true, message: "Habitat wajib diisi" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="usage"
            label="Kegunaan"
            rules={[{ required: true, message: "Kegunaan wajib diisi" }]}
          >
            <Input.TextArea rows={3} />
          </Form.Item>

          <Form.Item name="image" label="URL Gambar">
            <Input />
          </Form.Item>

          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: "Status wajib diisi" }]}
          >
            <Select>
              <Select.Option value="Stabil">Stabil</Select.Option>
              <Select.Option value="Terancam">Terancam</Select.Option>
              <Select.Option value="Kritis">Kritis</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="location"
            label="Lokasi"
            rules={[{ required: true, message: "Lokasi wajib diisi" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="family"
            label="Famili"
            rules={[{ required: true, message: "Famili wajib diisi" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item className="mb-0">
            <div className="flex justify-end gap-2">
              <Button onClick={() => setIsModalOpen(false)}>Batal</Button>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                Simpan
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
