import { IframeProps } from '@/@Types/iframes'
import Layout from '@/components/layout'
import { PBI } from '@/content/iframes'
import { useRouter } from 'next/router'

import { convertStringToSlug } from '@/utils/change-name-format'

export default function Report() {
    const router = useRouter();
    const { report } = router.query;

    const rp: IframeProps | undefined = PBI.find(({ name }) => convertStringToSlug(name) === report);

    return (
        <Layout className="w-full h-auto">
          {rp?.iframe}
        </Layout>
    )
}