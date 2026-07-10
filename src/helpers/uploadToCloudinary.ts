import cloudinary from "@/config/cloudinary";

export interface CloudinaryUploadResults {
  secure_url: string;
  public_id: string;
}

export async function uploadToCloudinary(
  file: File,
): Promise<CloudinaryUploadResults> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const base64 = buffer.toString("base64");
  const dataURl = `data:${file.type};base64,${base64}`;

  try {
    const res = await cloudinary.uploader.upload(dataURl, {
      folder: "hiking",
      transformation: [{ format: "webp" }],
    });

    return {
      secure_url: res.secure_url,
      public_id: res.public_id,
    };
  } catch (error) {
    console.error("Cloudinary upload error", error);
    throw new Error("failed to upload image");
  }
}

export async function deleteImageFromCloudinary(publicId: string) {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error("Error deleting image from Cloudinary", error);
  }
}
