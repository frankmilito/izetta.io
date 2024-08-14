import { Breadcrumbs } from '@/components/breadcrumbs';
import { CompanyFormData } from '@/components/forms/company-data-form';
import PageContainer from '@/components/layout/page-container';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { companyInfoSchema, CompanyInfoValue } from '@/lib/company-info-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Company Info', link: '/dashboard/company-data' }
];

export default async function page({ searchParams }: paramsProps) {
  return (
    <PageContainer scrollable>
      <Breadcrumbs items={breadcrumbItems} />
      <div>
        <CompanyFormData />
      </div>
    </PageContainer>
  );
}
