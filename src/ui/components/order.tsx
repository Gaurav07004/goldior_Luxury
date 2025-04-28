/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import perfume from "../../assets/perfume.png";
interface Customer {
  username: string;
  email: string;
  mobileNumber: number;
  location: string;
  dateJoined: string;
  order: number;
  delivered: number;
  cancelled: number;
  pending: number;
  Recent_Orders?: {
    title: string;
    status: string;
    date: string;
    time: string;
    description: string;
    courier?: string;
    warehouse?: string;
    estimatedDelivery?: string;
  }[];
  customerStatus: "Active" | "Inactive";
}

interface ProfileCardProps {
  onLogout: () => void;
}

import { Divider } from "keep-react";
import profilePic from "../../assets/profile.jpg";
import { PiCircleFill, PiPhoneCallLight } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
} from "keep-react";
import { PiCheckBold } from "react-icons/pi";

const CustomerDetailPage: React.FC<ProfileCardProps> = ({ onLogout }) => {
  const user = useSelector((state: any) => state.user);
  const UserData: Customer = {
    username: "Gaurav Singh",
    email: "gauravsingh07004@gmail.com",
    mobileNumber: 1234567890,
    location: "Mumbai",
    dateJoined: "2023-01-01",
    order: 1,
    delivered: 1,
    cancelled: 0,
    pending: 0,
    Recent_Orders: [
      {
        title: "Order Placed",
        status: "Completed",
        date: "Mon, Dec 9, 2024",
        time: "10:00",
        description:
          "Your order has been placed. The items were processed and are ready for shipment.",
      },
      {
        title: "Order Confirmed",
        status: "Completed",
        date: "Tue, Dec 10, 2024",
        time: "14:30",
        description: "Your order was confirmed and prepared for shipment.",
      },
      {
        title: "Shipped",
        status: "Completed",
        date: "Wed, Dec 11, 2024",
        time: "13:00",
        description:
          "Your order has been shipped. It left the warehouse and is on its way to you.",
        courier: "XYZ Logistics",
        warehouse: "Warehouse XYZ",
      },
      {
        title: "Out for Delivery",
        status: "Completed",
        date: "Thu, Dec 12, 2024",
        time: "09:00",
        description:
          "Your order was out for delivery and arrived on the scheduled date.",
      },
      {
        title: "Delivered",
        status: "Completed",
        date: "Sun, Dec 15, 2024",
        time: "14:00",
        description:
          "Your package was successfully delivered to the provided address.",
      },
    ],
    customerStatus: "Active",
  };

  const recentOrder =
    UserData?.Recent_Orders?.map((order) => ({
      title: order?.title,
      status: order?.status,
      date: order?.date,
      time: order?.time,
      description: order?.description,
      courier: order?.courier,
      warehouse: order?.warehouse,
      estimatedDelivery: order?.estimatedDelivery,
    })) || [];

  const data = [
    { label: "Total Order", value: UserData.order.toString() },
    { label: "Order Delivered", value: UserData.delivered.toString() },
    { label: "Order Cancelled", value: UserData.cancelled.toString() },
    { label: "Order Pending", value: UserData.pending.toString() },
  ];

  const customerDetails = [
    { label: "Location", value: UserData.location },
    { label: "Joined On", value: UserData.dateJoined },
  ];

  const TimelineComponent = () => {
    const currentDateTime = new Date();
    const currentDate = currentDateTime.toISOString().split("T")[0];
    const currentTime = currentDateTime
      .toTimeString()
      .split(" ")[0]
      .slice(0, 5);

    const formatDate = (date: string) => {
      return new Date(date).toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    };

    return (
      <section className="p-4">
        <div className="text-[#FF6500] font-semibold text-xs mb-4 uppercase text-start">
          Recent Orders
        </div>
        <div className=" bg-white rounded-lg">
          <div className="flex justify-between w-full items-center">
            <div className="space-x-3 flex items-center w-fit">
              <img
                src={perfume}
                alt="Profile Picture"
                className="w-16 h-16 object-contain rounded-lg border-[2.5px] border-gray-200 p-1 bg-slate-100"
                width={0}
                height={0}
              />
              <div>
                <h3 className="text-sm font-semibold text-gray-700">
                  ALL DAY-NIGHT
                </h3>
              </div>
            </div>
            <p className="text-[0.8rem] font-medium text-slate-500 w-[3rem]">
              1 pcs
            </p>
            <p className="text-sm font-semibold text-gray-800 w-[5rem]">
              ₹1195
            </p>
          </div>
        </div>

        {UserData?.customerStatus !== "Inactive" ? (
          <Timeline className="border-dashed border-l-[2px] m-4 border-orange-300">
            {recentOrder.map((event, index) => {
              const isTodayOrPast =
                new Date(`${event.date} ${event.time}`) <
                new Date(`${currentDate} ${currentTime}`);
              const isToday = event.date <= currentDate;

              return (
                <TimelineItem key={index} className="mb-6 relative">
                  <TimelinePoint
                    className={`border-2
                    ${
                      isToday
                        ? "border-green-500 bg-green-200"
                        : "border-orange-400 bg-orange-100"
                    }
                    w-[1.05rem] h-[1.05rem] rounded-full shadow-lg flex items-center justify-center -ml-[1.55rem] mt-[0.12rem]`}
                  />
                  {isToday && (
                    <PiCheckBold className="text-[0.6rem] text-black-600 absolute top-[0.2rem] -left-[0.3rem]" />
                  )}
                  <TimelineContent>
                    <div className="text-[0.9rem] font-semibold text-gray-600 flex items-center gap-2">
                      <span>{event.title}</span>
                      <span
                        className={`text-[0.65rem] w-fit uppercase flex items-center justify-center rounded-md px-2 py-1 cursor-pointer transition-colors ${
                          isTodayOrPast
                            ? event.status === "Completed"
                              ? "bg-green-100 text-green-500 hover:bg-green-200 over:bg-green-200"
                              : "bg-red-100 text-red-500 hover:bg-red-200 over:bg-red-200"
                            : "bg-red-100 text-red-500 hover:bg-red-200 cursor-not-allowed over:bg-red-200"
                        }`}
                      >
                        {isTodayOrPast ? event.status : "Pending"}
                      </span>
                    </div>
                    <p className="text-[0.65rem] font-normal text-gray-500 uppercase">
                      {isTodayOrPast
                        ? `${formatDate(event.date)} at ${event.time}`
                        : "Expected on " +
                          `${formatDate(event.date)} at ${event.time}`}
                    </p>

                    {isTodayOrPast && (
                      <p className="text-[0.8rem] font-normal text-gray-600">
                        {event.description}
                      </p>
                    )}

                    {event.courier && isTodayOrPast && (
                      <p className="text-xs text-gray-500">
                        <strong>Courier:</strong> {event.courier}
                      </p>
                    )}
                    {event.warehouse && isTodayOrPast && (
                      <p className="text-xs text-gray-500">
                        <strong>Warehouse:</strong> {event.warehouse}
                      </p>
                    )}
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
        ) : (
          <div className="flex flex-col items-center justify-center m-4">
            <div className="mb-4"></div>
            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              No Data Available
            </h2>
            <p className="text-gray-500 mb-6 text-xs text-center">
              It looks like there are no orders available because this customer
              is currently inactive. Please check back later or contact support
              for further assistance.
            </p>
          </div>
        )}
      </section>
    );
  };

  const renderCustomerInfo = () => (
    <div className="flex flex-col justify-between border border-gray-300 rounded-lg m-5">
      <div className="flex items-center p-4 border-b-[0.5px] border-gray-300">
        <img
          src={profilePic}
          alt="Profile Picture"
          className="w-16 h-16 object-contain rounded-lg border-[2.5px] border-gray-200 p-1 bg-slate-100"
        />
        <div className="ml-4 w-full">
          <div className="flex items-center justify-between w-full">
            {/* Left section: Name + Status */}
            <div className="flex items-center gap-2">
              <div className="text-gray-600 text-base font-semibold">
                {UserData?.username}
              </div>
              <span
                className={`relative text-[0.6rem] uppercase flex items-center justify-center rounded-md px-2 py-1 cursor-pointer transition-colors
          ${
            UserData?.customerStatus === "Active"
              ? "bg-green-100 text-green-500 hover:bg-green-200"
              : "bg-red-100 text-red-500 hover:bg-red-200"
          }`}
              >
                {UserData?.customerStatus}
              </span>
            </div>

            {/* Right section: Logout */}
            <button
              onClick={onLogout}
              className="relative text-[0.6rem] uppercase flex items-center justify-center rounded-md px-2 py-1 cursor-pointer transition-colors 
      bg-red-100 text-red-500 hover:bg-red-200"
            >
              Logout
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center text-gray-500 mt-1 gap-x-4 gap-y-2">
            <div className="flex items-center space-x-2">
              <IoMailOutline className="w-5 h-5 text-gray-400" />
              <span className="text-sm">{UserData?.email}</span>
            </div>

            <PiCircleFill className="w-1 h-1 text-gray-400 hidden sm:inline" />

            <div className="flex items-center space-x-2">
              <PiPhoneCallLight className="w-5 h-5 text-gray-400" />
              <span className="text-sm">{UserData?.mobileNumber}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 text-gray-500 uppercase">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col p-3 ${
              index !== data.length - 1
                ? "border-r-[0.5px] border-gray-300"
                : ""
            } hover:bg-gray-100 transition`}
          >
            <span className="text-[0.65rem] font-semibold text-gray-600">
              {item.label}
            </span>
            <span className="text-sm font-semibold mt-2">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCustomerDetails = () => {
    return (
      <div className="m-5">
        <div className="text-[#FF6500] font-semibold text-xs mb-4 uppercase text-left">
          Customer Details
        </div>
        <div className="grid grid-cols-2 gap-5 my-4 text-start">
          {customerDetails.map((detail, index) => (
            <div key={index}>
              <div className="flex items-start justify-between">
                <span className="w-1/2 text-[0.75rem] font-semibold text-gray-600">
                  {detail.label}
                </span>
                <div
                  className={`text-xs font-semibold text-gray-600 ${
                    detail.label === "Email" || detail.label === "Phone"
                      ? "text-orange-400"
                      : ""
                  }`}
                >
                  <span>{detail.value || "N/A"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderPreview = () => (
    <section className="sticky bottom-0 z-10 bg-white w-full h-7"></section>
  );

  useEffect(() => {}, [UserData]);

  return (
    <>
      <div
        className={`rounded-xl bg-white text-black transition-transform duration-500 ease-in-out z-20`}
      >
        <div className="overflow-auto">
          {renderCustomerInfo()}
          <Divider className="border-t-[0.5px] border-gray-200 mt-4" />
          {renderCustomerDetails()}
          <Divider className="border-t-[0.5px] border-gray-200 mt-4" />
          {TimelineComponent()}
        </div>
        {renderPreview()}
      </div>
    </>
  );
};

export default CustomerDetailPage;
