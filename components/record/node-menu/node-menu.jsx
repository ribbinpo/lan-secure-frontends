import { useState, Fragment, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';

const NodeMenu = ({ nodes, setNodeId, nodeId }) => {
  const [seletecdNode, setSeletecdNode] = useState(nodes[0]);
  useEffect(() => {
    const node = nodes.find((item) => item.idnode === nodeId);
    setSeletecdNode(node);
    if (node?.idnode)
      setNodeId(node?.idnode);
  }, [nodes]);
  useEffect(() => {
    if (seletecdNode?.idnode)
      setNodeId(seletecdNode?.idnode);
  }, [seletecdNode]);
  return (
    <Listbox
      value={seletecdNode}
      className="w-full h-full bg-green-400 rounded-sm border-black border-b-0 ring-black relative z-10"
      onChange={setSeletecdNode}
    >
      <div>
      <Listbox.Button
        className="flex justify-center items-center w-full h-full"
      >{seletecdNode?.name || ''}</Listbox.Button>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="absolute">
          {nodes.map((node, key) => (
            <Listbox.Option
              key={key}
              value={node}
              className="px-6 py-2 border-2 border-t-0 border-black bg-white cursor-pointer"
            >
              {node?.name || ''}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
      </div>
    </Listbox>
  );
};

export default NodeMenu;