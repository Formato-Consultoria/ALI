import { IframeProps } from '@/@Types/iframes'
import Layout from '@/components/layout'
import { PBI } from '@/content/iframes'
import { useRouter } from 'next/router'

import { changeNameFormat } from '@/utils/change-name-format'

import Link from 'next/link'
import { ArrowBendUpLeft } from 'phosphor-react'

export default function Report() {
    const router = useRouter();
    const { report } = router.query;

    const rp: IframeProps | undefined = PBI.find((rp) => changeNameFormat(rp.name) === report);

    return (
        <Layout className="w-full h-auto">
          <Link
            href="/"
            className={"top-0 -left-20 absolute"}
          >
            <ArrowBendUpLeft size={30} color="#080c10" weight="fill" />
          </Link>

          {rp?.iframe}
        </Layout>
    )
}