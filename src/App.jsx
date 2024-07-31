/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

function App() {
  const [activeButton, setActiveButton] = useState(1);

  const [activeBtn, setActiveBtn] = useState(1);

  function handleClick(id) {
    setActiveButton(id);
  }

  function onClick(id) {
    setActiveBtn(id);
  }

  return (
    <div className="mx-auto my-0 flex h-screen flex-col gap-[229px] bg-[#FFFFFF] font-sans">
      <div className="flex flex-col gap-[150px]">
        <section className="bg-custom-image h-[820px] bg-cover bg-no-repeat text-[#FFFFFF]">
          <div className="bg-top-gradient mb-[30px] h-[148.64px]">
            <header className="flex flex-row items-center justify-between px-[60px] py-[20px]">
              <div className="flex flex-row justify-between gap-[50px]">
                <div className="flex items-center">
                  <img src="/images/orisuun-logo.png" alt="Logo" />
                </div>
                <nav className="flex flex-row items-center gap-[40px] pt-5">
                  <div className="flex flex-row items-center gap-[8px]">
                    <span className="text-[16px] font-semibold leading-[24px]">
                      Platform
                    </span>
                    <div>
                      <img src="/images/dropdown.png" alt="dropdown" />
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-[8px]">
                    <span className="text-[16px] font-semibold leading-[24px]">
                      Connect
                    </span>
                    <div>
                      <img src="/images/dropdown.png" alt="dropdown" />
                    </div>
                  </div>
                  <ul className="flex flex-row items-center gap-[40px]">
                    <li>
                      <a
                        href="about"
                        className="text-[16px] font-semibold leading-[24px]"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="pricing"
                        className="text-[16px] font-semibold leading-[24px]"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        href="fund"
                        className="text-[16px] font-semibold leading-[24px]"
                      >
                        Fund
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="flex flex-row items-center justify-between gap-[12px] pt-5">
                <div className="flex items-center justify-center">
                  <button className="rounded-[56px] border-[2px] border-solid border-[#D8D9D9] px-[20px] py-[10px] text-[16px] font-semibold leading-[24px]">
                    Sign In
                  </button>
                </div>

                <div className="flex items-center justify-center">
                  <button className="rounded-[56px] border-[2px] border-solid border-[#2356C7] bg-[#2356C7] px-[20px] py-[10px] text-[16px] font-semibold leading-[24px]">
                    Join!
                  </button>
                </div>
              </div>
            </header>
          </div>
          <div className="bg-custom-gradient mx-auto flex h-[300px] w-[1097px] flex-col items-center justify-center gap-6 opacity-80">
            <span className="text-center text-[23px] font-semibold leading-[34.5px]">
              There's a place for you here!
            </span>
            <div className="flex flex-col">
              <span className="text-center text-[64px] font-semibold leading-[70.4px] tracking-tight">
                Get paid for your services while
              </span>
              <span className="text-center text-[64px] font-semibold leading-[70.4px] tracking-tighter">
                helping Black-owned businesses
              </span>
              <span className="text-center text-[64px] font-semibold leading-[70.4px]">
                grow
              </span>
            </div>
          </div>
        </section>

        <section className="mx-[40px] flex flex-row items-center gap-[40px]">
          <div className="contents">
            <img src="/images/Frame.png" alt="co_wokers" />
          </div>
          <div className="flex flex-col gap-[40px] px-[132px]">
            <h1 className="text-left text-[40px] font-semibold leading-[44px] tracking-tighter text-[#001E5F]">
              Orisuun and Professionals
            </h1>
            <div className="flex flex-col gap-[24px]">
              <p className="text-[20px] font-medium leading-[30px] tracking-tighter text-[#5B657B]">
                Orisuun is where professionals meet purpose. Our innovative
                online platform seamlessly connects skilled professionals with a
                diverse array of Black-owned businesses, fostering impactful
                collaborations and supporting economic empowerment within the
                community.
              </p>
              <p className="text-[20px] font-medium leading-[30px] tracking-tighter text-[#5B657B]">
                Through our intuitive platform, professionals gain access to a
                robust collection of businesses eager to grow, spanning
                industries from technology to fashion and everything in between.
                Elevate your impact with Orisuun.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center p-[30px]">
          <div className="mb-16 flex flex-col gap-[16px] text-center text-[#001E5F]">
            <span className="text-[16px] font-semibold leading-[17.6px]">
              How to build
            </span>
            <span className="text-[40px] font-semibold leading-[44px]">
              The tools and the team
            </span>
          </div>

          <div className="mb-5 flex cursor-pointer flex-row items-center justify-center gap-[8px] rounded-[66px] bg-[#F8F8F8] p-1">
            <button
              id={1}
              onClick={() => onClick(1)}
              className={`${activeBtn === 1 ? "shadow-3xl rounded-[59px] bg-[#FFFFFF] font-semibold text-[#001E5F]" : "bg-[#F8F8F8] font-medium text-[#808181]"} flex items-center justify-center rounded-[59px] px-20 py-4 text-[18px] leading-[24px]`}
            >
              Growth
            </button>

            <button
              id={2}
              onClick={() => onClick(2)}
              className={`${activeBtn === 2 ? "shadow-3xl rounded-[59px] bg-[#FFFFFF] font-semibold text-[#001E5F]" : "font-medium text-[#808181]"} flex items-center justify-center px-10 py-4 text-[18px] leading-[24px]`}
            >
              Visibility and collaboration
            </button>
          </div>

          <div className="mx-auto my-10 flex flex-row gap-[72px]">
            <div className="bg-custom-gradient-card flex h-[154px] w-[123px] flex-col items-center">
              <div className="-z-10 mb-3">
                <img
                  src="/images/tools/discount-portal.png"
                  alt="discount-portal"
                />
              </div>
              <span className="-z-10 text-center text-[20px] font-semibold leading-[26px] text-[#7FAAE3]">
                Discount portal
              </span>
            </div>
            <div className="flex h-[154px] w-[123px] flex-col items-center">
              <div className="mb-3">
                <img
                  src="/images/tools/business-dev.png"
                  alt="business-development"
                />
              </div>
              <span className="text-center text-[20px] font-semibold leading-[26px] text-[#7FAAE3]">
                Business development
              </span>
            </div>
            <div className="flex h-[128px] w-[103px] flex-col items-center">
              <div className="mb-3">
                <img src="/images/tools/fundraising.png" alt="fundraising" />
              </div>
              <span className="text-center text-[20px] font-semibold leading-[26px] text-[#7FAAE3]">
                Fundraising
              </span>
            </div>
            <div className="flex h-[128px] w-[132px] flex-col items-center">
              <div>
                <img src="/images/tools/team-forming.png" alt="team-forming" />
              </div>
              <span className="text-[20px] font-semibold leading-[26px] text-[#7FAAE3]">
                Team forming
              </span>
            </div>
            <div className="flex h-[128px] w-[114px] flex-col items-center">
              <div className="mb-3">
                <img
                  src="/images/tools/private-chats.png"
                  alt="private-chats"
                />
              </div>
              <span className="text-center text-[20px] font-semibold leading-[26px] text-[#7FAAE3]">
                Private chats
              </span>
            </div>
            <div className="flex h-[154px] w-[116px] flex-col items-center">
              <div className="mb-3">
                <img
                  src="/images/tools/business-collab.png"
                  alt="business-collaboration"
                />
              </div>
              <span className="text-center text-[20px] font-semibold leading-[26px] text-[#7FAAE3]">
                Business collaboration
              </span>
            </div>
            <div className="bg-custom-gradient-card-2 flex h-[154px] w-[116px] flex-col items-center">
              <div className="-z-10 mb-3">
                <img src="/images/tools/peer-to-peer.png" alt="peer-to-peer" />
              </div>
              <span className="-z-10 text-center text-[20px] font-semibold leading-[26px] text-[#7FAAE3]">
                Peer-to-peer transactions
              </span>
            </div>
          </div>

          <div>
            <img src="/images/card.png" alt="card" />
          </div>
        </section>

        <section className="flex flex-col gap-[100px] bg-[#F2F7FC] p-[50px]">
          <h1 className="text-center text-[40px] font-semibold leading-[44px]">
            Who's on Orisuun
          </h1>
          <div>
            <img src="/images/who-is-orisuun-card.png" alt="who-is-orisuun" />
          </div>
        </section>

        <section className="m-auto flex flex-col gap-[40px] p-[100px]">
          <h1 className="mb-5 text-center text-[40px] font-semibold leading-[44px] text-[#001E5F]">
            Exceptionally Affordable
          </h1>

          <div className="mx-auto flex cursor-pointer flex-row items-center justify-between rounded-[66px] bg-[#F8F8F8] p-1">
            <button
              id={1}
              onClick={() => handleClick(1)}
              className={` ${activeButton === 1 ? "shadow-3xl rounded-[59px] bg-[#FFFFFF] font-semibold text-[#1B3C7B]" : "text-[#808181]"} px-16 py-5 text-[20px] font-medium leading-[24px]`}
            >
              Monthly
            </button>

            <div className="flex flex-col items-center justify-center">
              <button
                id={4}
                onClick={() => handleClick(4)}
                className={`${activeButton === 4 ? "shadow-3xl rounded-[59px] bg-[#FFFFFF]" : ""} flex flex-col items-center justify-center gap-[8px] px-12 py-2`}
              >
                <span
                  className={`${activeButton === 4 ? "font-semibold text-[#1B3C7B]" : "font-medium text-[#808181]"} text-[20px] leading-[24px]`}
                >
                  Quarterly
                </span>
                <span className="text-[14px] font-medium leading-[16px] text-[#2C57A4]">
                  1 month free
                </span>
              </button>
            </div>

            <div className="flex flex-col items-center justify-center">
              <button
                id={5}
                onClick={() => handleClick(5)}
                className={`${activeButton === 5 ? "shadow-3xl rounded-[59px] bg-[#FFFFFF]" : ""} flex flex-col items-center justify-center gap-[8px] px-12 py-2`}
              >
                <span
                  className={`${activeButton === 5 ? "font-semibold text-[#1B3C7B]" : "font-medium text-[#808181]"} text-[20px] leading-[24px]`}
                >
                  Annually
                </span>
                <span className="text-[14px] font-medium leading-[16px] text-[#2C57A4]">
                  5 months free
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-row">
            <div>
              <img src="/images/card-1.png" alt="card-1" />
            </div>
            <div>
              <img src="/images/card-2.png" alt="card-2" />
            </div>
          </div>

          <div className="flex flex-col gap-[60px]">
            <div className="flex flex-row gap-[20px]">
              <div className="flex w-[323.67px] flex-col gap-[28px]">
                <div>
                  <img src="/images/pricing/card-a.png" alt="card" />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <span className="text-[20px] font-semibold leading-[28px] text-[#001E5F]">
                    Resource Hub
                  </span>
                  <span className="text-[20px] font-medium leading-[30px] text-[#5B657B]">
                    A comprehensive resource hub providing tools, guides, and
                    information.
                  </span>
                </div>
              </div>
              <div className="flex w-[323.67px] flex-col gap-[28px]">
                <div>
                  <img src="/images/pricing/card-b.png" alt="card" />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <span className="text-[20px] font-semibold leading-[28px] text-[#001E5F]">
                    Community Network
                  </span>
                  <span className="text-[20px] font-medium leading-[30px] text-[#5B657B]">
                    Connect with Black business owners to exchange insights,
                    share experiences, and explore collaboration opportunities.
                  </span>
                </div>
              </div>
              <div className="flex w-[323.67px] flex-col gap-[28px]">
                <div>
                  <img src="/images/pricing/card-c.png" alt="card" />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <span className="text-[20px] font-semibold leading-[28px] text-[#001E5F]">
                    Funding Access
                  </span>
                  <span className="text-[20px] font-medium leading-[30px] text-[#5B657B]">
                    Gain access to exclusive funding opportunities, including
                    grants, loans, and investments for Black-owned businesses.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-[20px]">
              <div className="flex w-[323.67px] flex-col gap-[28px]">
                <div>
                  <img src="/images/pricing/card-d.png" alt="card" />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <span className="text-[20px] font-semibold leading-[28px] text-[#001E5F]">
                    Business Directory
                  </span>
                  <span className="text-[20px] font-medium leading-[30px] text-[#5B657B]">
                    A searchable directory of Black-owned businesses to increase
                    visibility and facilitate connections.
                  </span>
                </div>
              </div>
              <div className="flex w-[323.67px] flex-col gap-[28px]">
                <div>
                  <img src="/images/pricing/card-e.png" alt="card" />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <span className="text-[20px] font-semibold leading-[28px] text-[#001E5F]">
                    Mentorship Program
                  </span>
                  <span className="text-[20px] font-medium leading-[30px] text-[#5B657B]">
                    A structured mentorship program linking experienced
                    entrepreneurs with those seeking guidance and support.
                  </span>
                </div>
              </div>
              <div className="flex w-[323.67px] flex-col gap-[28px]">
                <div>
                  <img src="/images/pricing/card-f.png" alt="card" />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <span className="text-[20px] font-semibold leading-[28px] text-[#001E5F]">
                    Experts and experience
                  </span>
                  <span className="text-[20px] font-medium leading-[30px] text-[#5B657B]">
                    Connect with industry experts and leverage their experience
                    for professional growth.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-[20px]">
              <div className="flex w-[323.67px] flex-col gap-[28px]">
                <div>
                  <img src="/images/pricing/card-g.png" alt="card" />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <span className="text-[20px] font-semibold leading-[28px] text-[#001E5F]">
                    Safety and secutity
                  </span>
                  <span className="text-[20px] font-medium leading-[30px] text-[#5B657B]">
                    Enjoy a secure platform with robust safety measures to
                    protect your business information.
                  </span>
                </div>
              </div>
              <div className="flex w-[323.67px] flex-col gap-[28px]">
                <div>
                  <img src="/images/pricing/card-h.png" alt="card" />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <span className="text-[20px] font-semibold leading-[28px] text-[#001E5F]">
                    Escrow-based Transactions
                  </span>
                  <span className="text-[20px] font-medium leading-[30px] text-[#5B657B]">
                    Contract with other members confidently with our
                    escrow-based transaction system with dispute resolution.
                  </span>
                </div>
              </div>
              <div className="flex w-[323.67px] flex-col gap-[28px]">
                <div>
                  <img src="/images/pricing/card-i.png" alt="card" />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <span className="text-[20px] font-semibold leading-[28px] text-[#001E5F]">
                    Matching
                  </span>
                  <span className="text-[20px] font-medium leading-[30px] text-[#5B657B]">
                    Get matched with potential partners, investors, and
                    collaborators to boost your business opportunities.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center gap-[150px] p-[30px]">
          <div className="flex flex-row gap-[50px]">
            <div className="h-[609px] w-[674px]">
              <img src="/images/benefits/pic-1.png" alt="picture" />
            </div>
            <div className="flex w-[515px] flex-col items-start gap-[40px]">
              <h1 className="text-[32px] font-semibold leading-[35.2px] text-[#001E5F]">
                Let the Orisuun network know about business opportunities you
                offer and are seeking
              </h1>
              <div className="flex flex-col gap-[24px]">
                <p className="text-[20px] font-medium leading-[30px]">
                  Broadcast the opportunities you offer and seek within the
                  Orisuun network.
                </p>
                <p className="text-[20px] font-medium leading-[30px]">
                  Our platform enables you to communicate your business needs
                  and offerings, fostering valuable connections and potential
                  collaborations that can drive your business forward.
                </p>
              </div>
              <button className="rounded-[88px] border-[#2357C6] bg-[#2357C6] px-[20px] py-[10px] text-[16px] font-bold leading-[24px] text-[#FFFFFF]">
                Find opportunities
              </button>
            </div>
          </div>

          <div className="flex flex-row gap-[50px]">
            <div className="flex w-[515px] flex-col items-start gap-[40px]">
              <h1 className="text-[32px] font-semibold leading-[35.2px] text-[#001E5F]">
                Find promising Black-owned businesses in your niche looking for
                co-founders or board members
              </h1>
              <div className="flex flex-col gap-[24px]">
                <p className="text-[20px] font-medium leading-[30px]">
                  Broadcast the opportunities you offer and seek within the
                  Orisuun network.
                </p>
                <p className="text-[20px] font-medium leading-[30px]">
                  Our platform enables you to communicate your business needs
                  and offerings, fostering valuable connections and potential
                  collaborations that can drive your business forward.
                </p>
              </div>
              <button className="rounded-[88px] border-[#2357C6] bg-[#2357C6] px-[20px] py-[10px] text-[16px] font-bold leading-[24px] text-[#FFFFFF]">
                Find businesses
              </button>
            </div>
            <div className="h-[609px] w-[674px]">
              <img src="/images/benefits/pic-2.png" alt="picture" />
            </div>
          </div>

          <div className="flex flex-row gap-[50px]">
            <div className="h-[609px] w-[674px]">
              <img src="/images/benefits/pic-1.png" alt="picture" />
            </div>
            <div className="flex w-[515px] flex-col items-start gap-[40px]">
              <h1 className="text-[32px] font-semibold leading-[35.2px] text-[#001E5F]">
                Donate to Black-Owned Businesses
              </h1>
              <div className="flex flex-col gap-[24px]">
                <p className="text-[20px] font-medium leading-[30px]">
                  Make a direct impact by donating to Black-owned businesses and
                  providing them with the financial support they need.
                </p>
                <p className="text-[20px] font-medium leading-[30px]">
                  Your contributions help these businesses overcome financial
                  barriers and achieve their goals, fostering economic growth
                  within the community.
                </p>
              </div>
              <button className="rounded-[88px] border-[#2357C6] bg-[#2357C6] px-[20px] py-[10px] text-[16px] font-bold leading-[24px] text-[#FFFFFF]">
                Start donating
              </button>
            </div>
          </div>

          <div className="flex flex-row gap-[50px]">
            <div className="flex w-[515px] flex-col items-start gap-[40px]">
              <h1 className="text-[32px] font-semibold leading-[35.2px] text-[#001E5F]">
                Work directly with Black-owned businesses on our platform safely
                and securely
              </h1>
              <div className="flex flex-col gap-[24px]">
                <p className="text-[20px] font-medium leading-[30px]">
                  Contract with other members confidently, knowing that all
                  transactions are handled securely by Stripe and that any
                  disputes will be handled in a timely manner by Orisuun.
                </p>
                <p className="text-[20px] font-medium leading-[30px]">
                  Take advantage of our low transaction fee (just 1%).
                </p>
              </div>
              <button className="rounded-[88px] border-[#2357C6] bg-[#2357C6] px-[20px] py-[10px] text-[16px] font-bold leading-[24px] text-[#FFFFFF]">
                Work with businesses
              </button>
            </div>
            <div className="h-[609px] w-[674px]">
              <img src="/images/benefits/pic-4.png" alt="picture" />
            </div>
          </div>
        </section>

        <section className="mx-[80px] flex items-center justify-center">
          <div>
            <img src="/images/cta.png" alt="CTA" />
          </div>
        </section>
      </div>

      <footer className="mx-auto flex flex-col px-[20px]">
        <div className="mb-10 flex flex-row items-center gap-5">
          <div>
            <img src="/images/footer/footer-logo.png" alt="Orisuun-logo" />
          </div>
          <div>
            <img src="/images/footer/footer-logo-1.png" alt="Orisuun-logo" />
          </div>
        </div>
        <div className="my-[50px] flex flex-row gap-[14px]">
          <div className="mr-[80px] flex flex-col gap-[24px]">
            <span className="py-[4px] text-[20px] font-bold leading-[28px] text-[#181818]">
              Connect
            </span>
            <ul className="flex gap-[8px]">
              <li>
                <a href="linkedin">
                  <img src="/images/socials/linkedin.png" alt="linkedin-logo" />
                </a>
              </li>
              <li>
                <a href="facebook">
                  <img src="/images/socials/facebook.png" alt="facebook-logo" />
                </a>
              </li>
              <li>
                <a href="instagram">
                  <img
                    src="/images/socials/instagram.png"
                    alt="instagram-logo"
                  />
                </a>
              </li>
              <li>
                <a href="twitter">
                  <img src="/images/socials/twitter.png" alt="twitter-logo" />
                </a>
              </li>
            </ul>
          </div>
          <div className="mr-[80px] flex flex-col gap-[24px]">
            <span className="p-[4px] text-[20px] font-bold leading-[28px] text-[#181818]">
              Orisuun and You
            </span>
            <ul className="flex flex-col gap-[12px] p-[4px] text-[14px] font-medium leading-[18.2px] text-[#6E6E6E]">
              <li>For Black-Owned Businesses</li>
              <li>For Management Consultants</li>
              <li>For Experts</li>
              <li>For Professionals</li>
              <li>For Investors</li>
              <li>For Mentors</li>
              <li>For Partners</li>
              <li>For Advocates</li>
            </ul>
          </div>
          <div className="mr-[80px] flex flex-col gap-[24px]">
            <span className="p-[4px] text-[20px] font-bold leading-[28px] text-[#181818]">
              The Company
            </span>
            <ul className="flex flex-col gap-[12px] p-[4px] text-[14px] font-medium leading-[18.2px] text-[#6E6E6E]">
              <li>Who We Are</li>
              <li>What We Are Not</li>
              <li>How We Can Help You</li>
              <li>Why This Is Critical</li>
              <li>Our Values</li>
              <li>Our Vision</li>
              <li>How You Can Help Us</li>
              <li>What’s New</li>
              <li>What’s Coming</li>
              <li>We Need Your Feedback</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="mr-[80px] flex flex-col gap-[24px]">
            <span className="p-[4px] text-[20px] font-bold leading-[28px] text-[#181818]">
              Fund
            </span>
            <span className="text-[14px] font-medium leading-[18.2px] text-[#6E6E6E]">
              The Black Wealth Fund
            </span>
          </div>
          <div className="mr-[80px] flex flex-col gap-[24px]">
            <span className="p-[4px] text-[20px] font-bold leading-[28px] text-[#181818]">
              Check Us Out
            </span>
            <ul className="flex flex-col gap-[12px] p-[4px] text-[14px] font-medium leading-[18.2px] text-[#6E6E6E]">
              <li>Demo Our Platform</li>
              <li>Pricing</li>
              <li>Sign In</li>
              <li>Sign Up</li>
            </ul>
          </div>
        </div>
        <span className="mb-1 text-[20px] font-bold leading-[28px] text-[#001E5F]">
          Let us keep you up-to-date on all of our insights
        </span>
        <span className="mb-3 text-[14px] font-medium leading-[18.2px] text-[#6E6E6E]">
          Subscribe to our newsletters and be smarter than all your friends.
        </span>
        <div className="mb-[100px] flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-[12px]">
            <div className="flex w-[180px] flex-row rounded-[5px] border-[0.8px] border-[#B2B3B3] bg-[#FFFFFF] px-[16px] py-[12px]">
              <input
                type="text"
                placeholder="Profile Type"
                className="w-[120px] text-[14px] font-medium leading-[18.2px] text-[#B2B3B3] placeholder:text-[14px] focus:outline-none"
              />
              <div>
                <img src="/images/footer/expand-icon.png" alt="expand-icon" />
              </div>
            </div>
            <div className="">
              <input
                type="text"
                placeholder="Name"
                className="w-[180px] rounded-[5px] border-[0.8px] border-[#B2B3B3] bg-[#FFFFFF] px-[16px] py-[12px] text-[14px] font-medium leading-[18.2px] text-[#B2B3B3] focus:outline-none"
              />
            </div>
            <div className="">
              <input
                type="email"
                placeholder="Email"
                className="w-[180px] rounded-[5px] border-[0.8px] border-[#B2B3B3] bg-[#FFFFFF] px-[16px] py-[12px] text-[14px] font-medium leading-[18.2px] text-[#B2B3B3] focus:outline-none"
              />
            </div>
            <div className="flex flex-row gap-[4px] rounded-[4px] bg-[#2357C6] px-[20px] py-[10px]">
              <button className="text-[16px] font-semibold leading-[24px] text-[#FFFFFF]">
                Subscribe
              </button>
              <img src="/images/footer/next-icon.png" alt="next-icon" />
            </div>
          </div>
          <div className="flex flex-row items-center gap-[24px] p-[4px] text-[14px] font-medium leading-[18.2px] text-[#6E6E6E]">
            <span>Privacy</span>
            <span>Terms</span>
            <span>© Copyright 2024 Orisuun. All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
