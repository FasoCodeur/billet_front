import React  from 'react';
import { DashboardShell } from "@/components/shell";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export const metadata = {
  title: "DemandAMP+",
};

export default async function Dashboard({
  params: { lang, domain },
}: Readonly<{
  params: { lang: Locale; domain: string };
}>) {
  const dictionary = await getDictionary(lang);
  metadata.title = `DemandAMP+ | ${domain.split(".")[0]?.toUpperCase()} - ${
    dictionary.DashBoard.Head
  }`;

  return (
    <DashboardShell>
      {/*<DashboardHeader*/}
      {/*  heading={dictionary.DashBoard.Head}*/}
      {/*  text={dictionary.DashBoard.HeadText}*/}
      {/*></DashboardHeader>*/}

      {/*<DashboardPage*/}
      {/*  chartDictonary={dictionary.Product.chart}*/}
      {/*  ProductDetailsDictonary={dictionary.Product.ProductDetails}*/}
      {/*  params={{ lang, domain: domain.replace("%A3", ":") }}*/}
      {/*  subdomain={subdomain}*/}
      {/*  hospitaltype={dataHospital?.type ?? "hospital"}*/}
      {/*  tableTranslation={dictionary.Product}*/}
      {/*  tableTranslation2={dictionary.DataInisght.DataInisghtTable}*/}
      {/*  tableTranslation3={dictionary.DashBoard}*/}
      {/*  tagsDictonary={dictionary.Product.tags}*/}
      {/*  userId={userId}*/}
      {/*  sessionId={sessionId}*/}
      {/*/>*/}
    </DashboardShell>
  );
}
