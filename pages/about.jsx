import Title from "../components/title";
import TableNode from "../components/tables/tableNode";
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import Image from 'next/image';
import autoprefixer from "autoprefixer";
import Navbar from '../components/layouts/navbar'

const about = () => {
  return (

    <div>
      <div className="px-16">
        <div className="flex justify-between mt-16">
          <div>
            <div className="text-2xl font-bold">LAN-Security
              <div>Monitoring Project</div>
            </div>
            <div className="flex justify mt-5">
          </div>
            <div>    LAN-Security Monitoring Project is a project to capture packets in LAN network 
              by using Raspberry pi board to install necessary libraries to capture packets. 
              We will let raspberry pi capture packets. every midnight. Every day we get 1 file per day. 
              Once we get all the packet files (pcap file), we write code to read the pcap file 
              and generate a connection graph like the example below. The packet we use to graph is the Address Resolution Protocol (ARP) 
              because it contains the IP addresses of both source and destination. 
              Then we will have the raspberry pi send the pcap file to the server including the code for graphing. 
              So that graphing takes place automatically every day We can see all connection graphs on this website. 
              And take this information to analyze to find a way to prevent further in the future.
            </div>
          </div>
          <div className="flex justify mr-20">
          </div>

          <div className="flex justify mt-10">
            <div className="w-full">
              <Image
                src="/assets/design.png"
                alt="Picture of the author"
                width="2200"
                height="1500"
              />
            </div>
          </div>
        </div>

        <div className="text-xl font-bold mt-16 w-ful grid justify-items-center">
          <div>Process</div>
        </div>
        <div className="w-full pb-2">
          <div className="flex justify-center">
            <Image
              src="/assets/process.png"
              alt="Picture of the author"
              width="700"
              height="250"
            />
          </div>
        </div>

        <div className="text-xl font-bold mt-16 w-ful grid justify-items-center pt-8">
          <div>Deatil of Graph</div>
        </div>
        <div className="w-full">
          <div className="flex justify-center pt-8 pb-5">
            <Image
              src="/assets/graph.png"
              alt="Picture of the author"
              width="700"
              height="520"
            />
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <div className="w-full">
            <Image
              src="/assets/color_host.png"
              alt="Picture of the author"
              width="1000"
              height="350"
            />
          </div>
          <div className="w-full">
            <Image
              src="/assets/color_arrow.png"
              alt="Picture of the author"
              width="1000"
              height="350"
            />
          </div>
        </div>

        <div className="text-xl font-bold mt-16 w-ful grid justify-items-center">
          <div>Malicious Node </div>
        </div>
        <div className="w-full">
          <div className="flex justify-center pt-8 pb-5">
            <Image
              src="/assets/malicious.png"
              alt="Picture of the author"
              width="700"
              height="350"
            />
          </div>
        </div>

        <div className="flex justify-between mt-5 pb-20">
          <div className="w-full">
            <Image
              src="/assets/normal.png"
              alt="Picture of the author"
              width="1000"
              height="750"
            />
          </div>
          <div className="w-full">
            <Image
              src="/assets/anomal.png"
              alt="Picture of the author"
              width="1000"
              height="750"
            />
          </div>
        </div>
      </div>
      <>

        <div className="p-10 bg-sky-700" />

        <main></main>
      </>
    </div>
  );
};

export default about;
