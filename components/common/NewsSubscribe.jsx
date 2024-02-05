"use client";
import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Oval } from "react-loader-spinner";
const NewsSubscribe = () => {
  const [email, setEmail] = useState();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setEmail("");
      setLoading(false);
      setIsOpenModal(true);
    }, 3000);
  };

  function closeModal() {
    setIsOpenModal(false);
  }

  return (
    <>
      {loading ? (
        <div className="w-full h-full flex justify-center items-center fixed top-0 left-0 bg-[#000000d1]">
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : null}
      <form onSubmit={submitHandler} action="" className="flex flex-col">
        <input
          className="w-[219px] h-[36px] border mt-[11px] border-[#545454] rounded-[5px] text-sm font-tomorrow-neue font-light text-white px-[15px] py-[15px] bg-transparent outline-none cursor-pointer"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
        />
        <button
          type="submit"
          className="bg-white  ease-in-out hover:bg-none w-[137px] h-[36px] rounded-[45px] text-sm font-semibold font-tomorrow-neuetext-black mt-[26px] hover:bg-transparent hover:text-white border-white hover:shadow-[0_0_2px#939393,0_0_20px_#FFF,0_0_10px#939393] overflow-hidden  transition-all duration-500"
        >
          Submit
        </button>
      </form>

      <Transition appear show={isOpenModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    News Subscribed
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      You have successfully subscribe latest news
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default NewsSubscribe;
