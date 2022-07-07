import Image from "next/image";
import React from "react";

const Comments = (props) => {
  return (
    <div className="flex flex-col">
      <table className="table-fixed">
        <tbody>
          <tr>
            <td className="w-[40px] align-middle">
              <Image src={props.imageProfile ? props.imageProfile : "https://via.placeholder.com/500.jpg?text=U"} alt={props.imageProfile} width={40} height={40} className="rounded-full" />
            </td>
            <td className="align-middle">
              <p className="font-semibold text-base self-center ml-3">{props.username}</p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <p className="text-sm ml-3">{props.userComments}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export { Comments };
