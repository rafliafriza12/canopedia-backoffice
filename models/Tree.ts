import mongoose, { Schema } from "mongoose";

const TreeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Nama pohon wajib diisi"],
      trim: true,
    },
    scientificName: {
      type: String,
      required: [true, "Nama ilmiah wajib diisi"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Deskripsi wajib diisi"],
    },
    habitat: {
      type: String,
      required: [true, "Habitat wajib diisi"],
    },
    usage: {
      type: String,
      required: [true, "Kegunaan wajib diisi"],
    },
    image: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: {
        values: ["Kritis", "Terancam", "Stabil"],
        message: "{VALUE} bukan status yang valid",
      },
      default: "Stabil",
    },
    location: {
      type: String,
      required: [true, "Lokasi wajib diisi"],
    },
    family: {
      type: String,
      required: [true, "Famili wajib diisi"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent mongoose from creating a model multiple times
const Tree = mongoose.models.Tree || mongoose.model("Tree", TreeSchema);

export default Tree;
