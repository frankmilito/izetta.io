import * as z from 'zod';
const ImgSchema = z.object({
  fileName: z.string(),
  name: z.string(),
  fileSize: z.number(),
  size: z.number(),
  fileKey: z.string(),
  key: z.string(),
  fileUrl: z.string(),
  url: z.string()
});
export const IMG_MAX_LIMIT = 3;

export const companyInfoSchema = z.object({
  companyName: z
    .string()
    .min(3, { message: 'Company name must be atleast 3 characters' }),
  webpage: z.string().url({ message: 'Invalid url' }),
  description: z
    .string()
    .min(3, { message: 'Company Description must be at least 3 characters' }),
  productServiceDesc: z
    .string()
    .min(3, { message: 'Product or Service must be at least 3 characters' }),
  crm: z.string().min(1, { message: 'Please select a category' }),
  toneOfVoice: z.string().min(1, { message: 'Please select a category' }),
  companyImgUrl: z
    .instanceof(File)
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: 'File size should be less than 5MB'
    })
    .refine((file) => ['image/jpeg', 'image/png'].includes(file.type), {
      message: 'Only JPEG and PNG files are allowed'
    }),
  productImgUrl: z
    .array(ImgSchema)
    .max(IMG_MAX_LIMIT, { message: 'You can only add up to 3 images' })
    .min(1, { message: 'At least one image must be added.' })
});

export type CompanyInfoValue = z.infer<typeof companyInfoSchema>;
