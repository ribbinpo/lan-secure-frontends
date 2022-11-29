import Head from 'next/head';
import Carousel from '/components/carousel/carousel.jsx';
import { dashboardLists } from '/constants/carouselList';
import { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import NodeMenu from '../components/record/node-menu/node-menu';
import TableNode from '../components/record/table/table';
import axios from 'axios';

export default function Home() {
  const [tab, setTab] = useState('image');
  const [nodeId, setNodeId] = useState(1);
  const [nodes, setNodes] = useState([]);
  useEffect(() => {
    // fetch to got lastest images in each nodes
    const fetch = async () => {
      try {
        // const res = await axios.get('http://localhost:8000/node/getAll');
        const res = await axios.get('http://137.184.74.103/node/getAll');
        console.log(res.data);
        setNodeId(res.data[0].idnode);
        setNodes(res.data);
      } catch (err) {
        console.log(err);
        throw err;
      }
    };
    fetch();
  }, []);
  useEffect(() => {
    console.log(nodeId);
  }, [nodeId]);
  return (
    <>
      <div className="min-h-screen bg-white pt-8">
      {/* <div className="min-h-screen bg-[#EEEEEE] pt-8"> */}
        <div className=" mx-16">
          <Carousel images={dashboardLists} width={1000} height={500} />
        </div>
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
                <NodeMenu nodes={nodes} setNodeId={setNodeId} nodeId={nodeId} />
              </div>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel className="mt-10 space-y-3">
                <TableNode config="image" nodeId={nodeId} />
              </Tab.Panel>
              <Tab.Panel className="mt-10 space-y-3">
                <TableNode config="dot" nodeId={nodeId} />
              </Tab.Panel>
              <Tab.Panel className="mt-10 space-y-3">
                <TableNode config="pcap" nodeId={nodeId} />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      </div>
    </>
  )
}
