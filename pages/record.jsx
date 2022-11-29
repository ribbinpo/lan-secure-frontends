import { useState } from 'react';
import { Tab } from '@headlessui/react';
import NodeMenu from '../components/record/node-menu/node-menu';
import TableNode from '../components/record/table/table';

const nodes = [
  { id: 1, name: 'PSU005', },
  { id: 2, name: 'PSU035', },
];

const Record = () => {
  const [tab, setTab] = useState('image');
  return (
    <div className="bg-white w-full py-3 px-24">
      <div className="bg-[#EEEEEE] p-3">
        <Tab.Group>
          <Tab.List className="flex justify-between border-b-black border-b-2">
            <div className="space-x-3">
            <Tab
              onClick={(e) => { setTab('image') }}
              className={`${(tab === 'image') ? 'bg-sky-500 border-blackk outline-none':'bg-white'} px-6 py-2  focus:bg-sky-500 focus:border-black bg-white rounded-sm border-2 border-b-0 ring-black focus:outline-none`}
            >
              IMAGE
            </Tab>
            <Tab
              onClick={(e) => { setTab('dot') }}
              className={`${(tab === 'dot') ? 'bg-sky-500 border-black outline-none':'bg-white'} px-6 py-2  focus:bg-sky-500 focus:border-black bg-white rounded-sm border-2 border-b-0 ring-black focus:outline-none`}
            >
              DOT
            </Tab>
            <Tab
              onClick={(e) => { setTab('pcap') }}
              className={`${(tab === 'pcap') ? 'bg-sky-500 border-black outline-none':'bg-white'} px-6 py-2  focus:bg-sky-500 focus:border-black bg-white rounded-sm border-2 border-b-0 ring-black focus:outline-none`}
            >
              PCAP
            </Tab>
            </div>
            <div className="w-28">
              <NodeMenu nodes={nodes} />
            </div>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="mt-10 space-y-3">
              <TableNode />
            </Tab.Panel>
            <Tab.Panel className="mt-10 space-y-3">
              <TableNode />
            </Tab.Panel>
            <Tab.Panel className="mt-10 space-y-3">
              <TableNode />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Record;