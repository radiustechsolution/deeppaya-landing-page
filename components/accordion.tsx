import { siteConfig } from "@/config/site";
import React from "react";
import { IoMdAdd } from "react-icons/io";
import Button from "./button";
import { Accordion, AccordionItem } from "@heroui/react";
import Link from "next/link";

export const AccordionComp = () => {
  const [selectedKeys, setSelectedKeys] = React.useState<any>(new Set([""]));
  const courses = ["Answers comes here ..."];

  const categories1 = [
    {
      id: 0,
      title: `Is ${siteConfig.name} security guaranteed?`,
      answer: `${siteConfig.name} uses bank-grade security, end-to-end encryption, and two-factor authentication to ensure your transactions and personal data are always safe.`,
    },
    {
      id: 1,
      title: `How can I activate ${siteConfig.name} account?`,
      answer: `Simply download the ${siteConfig.name} app, sign up with your phone number, complete your KYC by uploading a valid ID and selfie, and your account will be activated immediately.`,
    },
    {
      id: 2,
      title: `Can I send my money to others by ID?`,
      answer: `Yes, ${siteConfig.name} allows you to send money using a phone number, username, or unique customer ID. It’s fast, secure, and requires no bank details.`,
    },
  ];

  const categories2 = [
    {
      id: 3,
      title: `How does ${siteConfig.name} works?`,
      answer: `${siteConfig.name} is a mobile fintech app that lets you send and receive money, buy airtime, data, pay utility bills, and more. Fund your wallet and enjoy fast, low-cost transactions 24/7.`,
    },
    {
      id: 4,
      title: `What should I do when I forget my pin?`,
      answer: `Tap "Forgot PIN" on the login screen, verify your identity using your registered phone number or email, and follow the steps to reset your transaction PIN.`,
    },
    {
      id: 5,
      title: `Does ${siteConfig.name} have a webapp version?`,
      answer: `Yes, ${siteConfig.name} offers a secure web-based version where you can manage your account, view transactions, and perform basic operations. Visit the official website to log in.`,
    },
  ];

  return (
    <section className="items-center flex flex-col gap-10">
      <div className="flex flex-col lg:flex-row shadow-md p-5 mt-10 items-start justify-between w-full">
        {/* Left */}
        <div className="w-full basis-[50%]">
          {categories1.map((v) => (
            <Accordion
              key={v.id}
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
              selectionMode="single"
            >
              <AccordionItem
                key={v.id}
                aria-label={v.title}
                className="text-black "
                indicator={<IoMdAdd size={20} color="black" />}
                title={
                  <span
                    className="text-[15px] font-ProximaNova font-medium"
                    style={{ color: "black" }}
                  >
                    {v.title}
                  </span>
                }
              >
                <ul className="" key={v.id}>
                  <li className="opacity-70 text-[14px]">{v.answer}</li>
                </ul>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        {/* Right */}
        <div className="w-full basis-[50%]">
          {categories2.map((v) => (
            <Accordion
              key={v.id}
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
              selectionMode="single"
            >
              <AccordionItem
                key={v.id}
                aria-label={v.title}
                className="text-black "
                indicator={<IoMdAdd size={20} color="black" />}
                title={
                  <span
                    className="text-[15px] font-ProximaNova font-medium"
                    style={{ color: "black" }}
                  >
                    {v.title}
                  </span>
                }
              >
                <ul className="" key={v.id}>
                  <li className="opacity-70 text-[14px]">{v.answer}</li>
                </ul>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
      <Link className="" href={"/contact"}>
        <Button className="w-[70%] text-white sm:w-auto">Contact us</Button>
      </Link>
    </section>
  );
};
