/* eslint-disable react-hooks/rules-of-hooks */
import Title from "../components/title";
import TableNode from "../components/tables/tableNode";
import AddNode from "../components/addnode/addnode";
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react';



const node = () => {
  const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
  return (
    
    <div className="px-16 space-y-3 pt-8">
      <Title name="Node">
        <Transition appear show={isOpen} as={Fragment}>
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
          <div className="fixed inset-0 bg-opacity-25" />
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
              <Dialog.Panel>
              <div><AddNode/></div>
              </Dialog.Panel>
              </Transition.Child>
              </div>
          </div>
          </Dialog>
        </Transition>
        <button type="button" className=" px-3 py-1 rounded-sm text-sm" onClick={openModal} ><AiOutlineAppstoreAdd size={25}/></button>
      </Title>
      <TableNode />
      
    </div>
  );
};

export default node;

