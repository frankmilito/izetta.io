'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useToast } from '../ui/use-toast';
import { companyInfoSchema, CompanyInfoValue } from '@/lib/company-info-schema';
import { cn } from '@/lib/utils';
import { Link2Icon, UploadIcon } from '@radix-ui/react-icons';
import { Textarea } from '../ui/textarea';

export const IMG_MAX_LIMIT = 3;

export const CompanyFormData = () => {
  const defaultValues = {
    companyName: '',
    webpage: '',
    description: '',
    productServiceDesc: '',
    crm: '',
    toneOfVoice: '',
    imgUrl: []
  };
  const form = useForm<CompanyInfoValue>({
    resolver: zodResolver(companyInfoSchema),
    defaultValues,
    mode: 'onChange',
    reValidateMode: 'onChange'
  });

  const onSubmit = (data: CompanyInfoValue) => {
    console.log(data);
  };
  return (
    <div className="mx-auto w-[70%]">
      <div className="my-8">
        <h2 className="text-2xl font-bold tracking-tight">
          Company Information
        </h2>
        <p className="text-sm text-muted-foreground">
          Fill out the details about your company and product/service
        </p>
      </div>
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input
                    disabled={false}
                    placeholder="Enter your company Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="webpage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Webpage</FormLabel>
                <FormControl>
                  <Input
                    disabled={false}
                    placeholder="https://example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Describe your company" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="productImgUrl"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center">
                    <label className="flex w-fit cursor-pointer items-center justify-start rounded border-[1px] border-gray-200 px-4 py-2 capitalize  ">
                      <UploadIcon />
                      <span className="ml-2 text-sm leading-normal">
                        Attach File
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            field.onChange(file);
                          }
                        }}
                        ref={field.ref}
                      />
                    </label>
                    <small className="ml-2 text-gray-500">
                      Optional: Attach a file related to your company
                    </small>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="productServiceDesc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product/Service Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your product or service..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="productImgUrl"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center">
                    <label className="flex w-fit cursor-pointer items-center justify-start rounded border-[1px] border-gray-200 px-4 py-2 capitalize  ">
                      <UploadIcon />
                      <span className="ml-2 text-sm leading-normal">
                        Attach File
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            field.onChange(file);
                          }
                        }}
                        ref={field.ref}
                      />
                    </label>
                    <small className="ml-2 text-gray-500">
                      Optional: Attach a file related to your product or service
                    </small>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <p className="mb-2">Connect CRM</p>
            <Button className="w-full border-[1px] border-gray-200 bg-transparent shadow-none hover:bg-transparent ">
              <Link2Icon />
              <small className="ml-2"> Connect CRM</small>
            </Button>
          </div>
          <div>
            <p className="mb-2">Tone of Voice</p>

            <div className="flex">
              <div className="me-4 flex items-center shadow hover:shadow-lg">
                <input
                  id="inline-radio"
                  type="radio"
                  value=""
                  checked
                  name="inline-radio-group"
                  className={cn(
                    'h-4 w-4 border-black bg-black text-black focus:ring-black'
                  )}
                />
                <label
                  htmlFor="inline-radio"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Simon Sinek
                </label>
              </div>
              <div className="me-4 flex items-center">
                <input
                  id="inline-2-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-gray-900 "
                />
                <label
                  htmlFor="inline-2-radio"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Alex Hormozi
                </label>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-2">Sales approach</p>
            <div className="flex justify-between gap-4">
              <div
                className={cn(
                  'flex-1 space-y-3 rounded border-[1px] border-gray-200 p-4'
                )}
              >
                <h2 className="text-md font-semibold">FOMO Strategy</h2>
                <p>Fomo strategy, long description</p>
              </div>
              <div
                className={cn(
                  'flex-1 space-y-3 rounded border-[1px] border-gray-200 p-4'
                )}
              >
                <h2 className="text-md font-semibold">AMSI Strategy</h2>
                <p>Amsi strategy description</p>
              </div>
            </div>
          </div>
          <Button type="submit" className="bg-black text-white hover:bg-black ">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};
