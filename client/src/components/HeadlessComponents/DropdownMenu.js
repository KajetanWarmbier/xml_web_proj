import { Menu } from "@headlessui/react";
import {
  AiFillCaretDown,
  AiOutlineUnorderedList,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const DropdownMenu = (props) => {
  let secondItemLook;

  if (props.secondLook === "add") {
    secondItemLook = (
      <AiOutlineUserAdd className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white" />
    );
  } else {
    secondItemLook = (
      <AiOutlineUnorderedList className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white" />
    );
  }
  return (
    <div className="flex justify-end">
      <Menu as="div" className="relative">
        {/* Menu Button */}
        <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-white bg-opacity- text-[18px]  font-medium text-gray-700 hover:bg-gray-50 ">
          {props.name}
          <AiFillCaretDown
            className="-mr-1 ml-2 h-5 w-5 mt-[5px]"
            aria-hidden="true"
          />
        </Menu.Button>

        {/* Menu Items */}
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <Link to={props.firstItemLink}>
                <h1 className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-300 hover:text-white">
                  <AiOutlineUnorderedList
                    className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white"
                    aria-hidden="true"
                  />
                  {props.firstItem}
                </h1>
              </Link>
            </Menu.Item>

            <Menu.Item>
              <Link to={props.secondItemLink}>
                <h1 className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-300 hover:text-white">
                  {secondItemLook}
                  {props.secondItem}
                </h1>
              </Link>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default DropdownMenu;
