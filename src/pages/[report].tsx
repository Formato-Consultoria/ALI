import { IframeProps } from "@/@Types/iframes";
import Layout from "@/components/layout";
import NavBar from "@/components/navbar";
import { PBI } from "@/content/iframes";
import { useRouter } from "next/router";

export default function Report() {
    const router = useRouter();
    const { report } = router.query;

    const rp: IframeProps | undefined = PBI.find((rp) => rp.name === report);

    return (
        <Layout className="w-full h-screen">
          <NavBar />
          <div className="">
            {rp?.iframe}
          </div>
        </Layout>
    )
}