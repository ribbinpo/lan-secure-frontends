import { useEffect, useState, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { BsCloudDownload } from 'react-icons/bs';

const example = [
  { id: 1, node: 'PSU005', datetime: '01112022', connectionGraph: '01112022.png', url: '1' },
  { id: 2, node: 'PSU035', datetime: '02112022', connectionGraph: '02112022.png', url: '2' }
];

const NodeTable = ({ config, nodeId }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let url = '';
    switch (config) {
      case 'image':
        console.log('image');
      case 'dot':
        console.log('dot');
      case 'pcap':
        console.log('pcap');
    }
    // axios.get => set name, fetch by id node
    setData(example);
  }, []);
  return (
    <>
      <div className="font-bold">
        {`Records (${5} lastest)`}
      </div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-blue-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className=' text-sm text-gray-900 '>
              <th scope="col" className="py-3 px-6">
                Node
              </th>
              <th scope="col" className="py-3 px-6">
                Date Time
              </th>
              <th scope="col" className="py-3 px-6">
                Connection Graph
              </th>
              <th scope="col" className="py-3 px-6">
                Download
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((value, index) => {
              return (
                <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {value.node}
                  </th>
                  <td className="py-4 px-6">
                    {value.datetime}
                  </td>
                  <td className="py-4 px-6">
                    {(config === 'image') ? (
                      <>Image: {value.connectionGraph}</>
                    ):(
                      <>{value.connectionGraph}</>
                    )}
                  </td>
                  <td className="py-3 px-7">
                    {/* Link value.url */}
                    <a href="#"><BsCloudDownload size={20}/></a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  )
};

export default NodeTable;
