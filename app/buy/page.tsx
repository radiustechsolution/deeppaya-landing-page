"use client";
import React, { useState, useEffect } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import {
  FiPhone,
  FiWifi,
  FiTv,
  FiZap,
  FiBook,
  FiMoreHorizontal,
  FiUser,
  FiCreditCard,
} from "react-icons/fi";
import { FaNairaSign } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { toast } from "react-toastify";
import { usePaystackPayment } from "react-paystack";

interface NetworkProvider {
  name: string;
  code: string;
  img: string;
}
interface DataPlan {
  PRODUCT_CODE: string;
  PRODUCT_ID: string;
  PRODUCT_NAME: string;
  PRODUCT_AMOUNT: number;
  PRODUCT_SOURCE: number;
}
interface CableProvider {
  name: string;
  code: string;
  img: string;
}

interface CablePackage {
  PACKAGE_ID: string;
  PACKAGE_NAME: string;
  PACKAGE_AMOUNT: string;
  PRODUCT_DISCOUNT_AMOUNT: string;
  PRODUCT_DISCOUNT: string;
}
interface ElectricityProvider {
  name: string;
  code: string;
  img: string;
}
interface EducationProduct {
  PRODUCT_CODE: string;
  PRODUCT_DESCRIPTION: string;
  PRODUCT_AMOUNT: string;
  img: string;
}

interface ApiResponse {
  status: number;
  message: string;
  data: {
    network_provider: NetworkProvider[];
    data_plans: {
      [key: string]: {
        ID: string;
        PRODUCT: DataPlan[];
      }[];
    };
    cable_provider: CableProvider[];
    cable: {
      TV_ID: {
        [key: string]: {
          ID: string;
          PRODUCT: CablePackage[];
        }[];
      };
    };
    elecricity: ElectricityProvider[];
    education: {
      EXAM_TYPE: EducationProduct[];
    };
  };
}

const Buy = () => {
  const [selectedService, setSelectedService] = useState("airtime");
  const [servicesData, setServicesData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});
  const [transactionDetails, setTransactionDetails] = useState<
    Record<string, string>
  >({});

  const [formData, setFormData] = useState({
    phoneNumber: "",
    network: "",
    amount: "",
    email: "",
    dataBundle: "",
    cableProvider: "",
    smartCardNumber: "",
    customerName: "",
    meterNumber: "",
    discoCompany: "",
    studentId: "",
    institution: "",
    course: "",
    serviceType: "",
  });

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/api/services");
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const data: ApiResponse = await response.json();
        setServicesData(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch services. Please try again later.");
        setLoading(false);
        console.error("Error fetching services:", err);
      }
    };

    fetchServices();
  }, []);

  const services = [
    {
      id: "airtime",
      name: "Airtime",
      icon: FiPhone,
      color: "bg-primary",
      hoverColor: "hover:bg-blue-600",
    },
    {
      id: "data",
      name: "Data",
      icon: FiWifi,
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      id: "cable",
      name: "Cable TV",
      icon: FiTv,
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
    },
    {
      id: "electricity",
      name: "Electricity",
      icon: FiZap,
      color: "bg-yellow-500",
      hoverColor: "hover:bg-yellow-600",
    },
    {
      id: "education",
      name: "Education",
      icon: FiBook,
      color: "bg-red-500",
      hoverColor: "hover:bg-red-600",
    },
    {
      id: "others",
      name: "Others",
      icon: FiMoreHorizontal,
      color: "bg-gray-500",
      hoverColor: "hover:bg-gray-600",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    console.log(e.target.value);
  };

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId);
    // Reset form data when switching services
    setFormData({
      phoneNumber: "",
      email: "",
      network: "",
      amount: "",
      dataBundle: "",
      cableProvider: "",
      smartCardNumber: "",
      customerName: "",
      meterNumber: "",
      discoCompany: "",
      studentId: "",
      institution: "",
      course: "",
      serviceType: "",
    });
  };

  const renderForm = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          {error}
        </div>
      );
    }

    if (!servicesData) {
      return null;
    }

    switch (selectedService) {
      case "airtime":
        return (
          <div className="space-y-6">
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </p>
              <div className="relative">
                <TfiEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </p>
              <div className="relative">
                <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter phone number"
                />
              </div>
            </div>
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-2">
                Network Provider
              </p>
              <select
                name="network"
                value={formData.network}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Network</option>
                {servicesData.data.network_provider.map((provider) => (
                  <option key={provider.code} value={provider.name}>
                    {provider.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </p>
              <div className="relative">
                <FaNairaSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter amount"
                />
              </div>
            </div>
          </div>
        );

      case "data":
        return (
          <div className="space-y-6">
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </p>
              <div className="relative">
                <TfiEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </p>
              <div className="relative">
                <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter phone number"
                />
              </div>
            </div>
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-2">
                Network Provider
              </p>
              <select
                name="network"
                value={formData.network}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select Network</option>
                {servicesData.data.network_provider.map((provider) => (
                  <option
                    key={provider.code}
                    value={
                      provider.name == "9MOBILE" ? "MOBILE" : provider.name
                    }
                  >
                    {provider.name}
                  </option>
                ))}
              </select>
            </div>
            {formData.network && (
              <div>
                <p className="block text-sm font-medium text-gray-700 mb-2">
                  Data Bundle
                </p>
                <select
                  name="dataBundle"
                  value={formData.dataBundle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select Bundle</option>
                  {servicesData.data.data_plans[formData.network]?.map(
                    (planGroup) =>
                      planGroup.PRODUCT.map((plan) => (
                        <option key={plan.PRODUCT_ID} value={plan.PRODUCT_CODE}>
                          {plan.PRODUCT_NAME} - ₦{plan.PRODUCT_AMOUNT}
                        </option>
                      ))
                  )}
                </select>
              </div>
            )}
          </div>
        );

      case "cable":
        return (
          <div className="space-y-6">
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </p>
              <div className="relative">
                <TfiEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-2">
                Cable Provider
              </p>
              <select
                name="cableProvider"
                value={formData.cableProvider}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select Provider</option>
                {servicesData.data.cable_provider.map((provider) => (
                  <option key={provider.code} value={provider.name}>
                    {provider.name}
                  </option>
                ))}
              </select>
            </div>
            {formData.cableProvider && (
              <div>
                <p className="block text-sm font-medium text-gray-700 mb-2">
                  Package
                </p>
                <select
                  name="dataBundle"
                  value={formData.dataBundle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select Package</option>
                  {servicesData.data.cable.TV_ID[formData.cableProvider]?.map(
                    (cableGroup: { ID: string; PRODUCT: CablePackage[] }) =>
                      cableGroup.PRODUCT.map((pkg: CablePackage) => (
                        <option key={pkg.PACKAGE_ID} value={pkg.PACKAGE_ID}>
                          {pkg.PACKAGE_NAME} - ₦{pkg.PACKAGE_AMOUNT}
                        </option>
                      ))
                  )}
                </select>
              </div>
            )}
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-2">
                Smart Card Number
              </p>
              <div className="relative">
                <FiCreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="smartCardNumber"
                  value={formData.smartCardNumber}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter smart card number"
                />
              </div>
            </div>
          </div>
        );

      case "electricity":
        return (
          <div className="space-y-6">
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </p>
              <div className="relative">
                <TfiEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-2">
                Electricity Company
              </p>
              <select
                name="discoCompany"
                value={formData.discoCompany}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="">Select Company</option>
                {servicesData.data.elecricity.map((provider) => (
                  <option key={provider.code} value={provider.code}>
                    {provider.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-2">
                Meter Number
              </p>
              <input
                type="text"
                name="meterNumber"
                value={formData.meterNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Enter meter number"
              />
            </div>
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </p>
              <div className="relative">
                <FaNairaSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter amount"
                />
              </div>
            </div>
          </div>
        );

      case "education":
        return (
          <div className="space-y-6">
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </p>
              <div className="relative">
                <TfiEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-2">
                Institution
              </p>
              <select
                name="institution"
                value={formData.institution}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="">Select Institution</option>
                {servicesData.data.education.EXAM_TYPE.map((exam) => (
                  <option key={exam.PRODUCT_CODE} value={exam.PRODUCT_CODE}>
                    {exam.PRODUCT_DESCRIPTION} - ₦{exam.PRODUCT_AMOUNT}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-2">
                Student ID/Registration Number
              </p>
              <input
                type="text"
                name="studentId"
                value={formData.studentId}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Enter student ID"
              />
            </div>
          </div>
        );

      case "others":
        return (
          <div className="space-y-6">
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-2">
                Service Type
              </p>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              >
                <option value="">Select Service</option>
                <option value="betting">Betting Top-up</option>
                <option value="insurance">Insurance</option>
                <option value="transport">Transport Booking</option>
                <option value="hotel">Hotel Booking</option>
              </select>
            </div>
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-2">
                Service Details
              </p>
              <textarea
                name="serviceDetails"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder="Enter service details..."
              ></textarea>
            </div>
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </p>
              <div className="relative">
                <FaNairaSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="Enter amount"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    let hasError = false;

    // Common validations
    if (!formData.email) {
      errors.email = "Email is required";
      hasError = true;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email format";
      hasError = true;
    }

    // Service-specific validations
    switch (selectedService) {
      case "airtime":
        if (!formData.phoneNumber) {
          errors.phoneNumber = "Phone number is required";
          hasError = true;
        }

        if (!formData.network) {
          errors.network = "Network is required";
          hasError = true;
        }

        if (!formData.amount) {
          errors.amount = "Amount is required";
          hasError = true;
        }

        if (Number(formData.amount) < 10) {
          errors.amount = "Amount cannot be less than ₦50";
          hasError = true;
        }
        break;

      case "data":
        if (!formData.phoneNumber) {
          errors.phoneNumber = "Phone number is required";
          hasError = true;
        }

        if (!formData.network) {
          errors.network = "Network is required";
          hasError = true;
        }

        if (!formData.dataBundle) {
          errors.dataBundle = "Data bundle is required";
          hasError = true;
        }
        break;

      case "cable":
        if (!formData.cableProvider) {
          errors.cableProvider = "Provider is required";
          hasError = true;
        }

        if (!formData.dataBundle) {
          errors.dataBundle = "Package is required";
          hasError = true;
        }

        if (!formData.smartCardNumber) {
          errors.smartCardNumber = "Smart card number is required";
          hasError = true;
        }
        break;

      case "electricity":
        if (!formData.discoCompany) {
          errors.discoCompany = "Company is required";
          hasError = true;
        }

        if (!formData.meterNumber) {
          errors.meterNumber = "Meter number is required";
          hasError = true;
        }

        if (!formData.amount) {
          errors.amount = "Amount is required";
          hasError = true;
        }

        if (Number(formData.amount) < 500) {
          errors.amount = "Amount cannot be less than ₦500";
          hasError = true;
        }
        break;

      case "education":
        if (!formData.institution) {
          errors.institution = "Institution is required";
          hasError = true;
        }

        if (!formData.studentId) {
          errors.studentId = "Student ID is required";
          hasError = true;
        }
        break;

      case "others":
        if (!formData.serviceType) {
          errors.serviceType = "Service type is required";
          hasError = true;
        }

        if (!formData.amount) {
          errors.amount = "Amount is required";
          hasError = true;
        }
        break;
    }

    setValidationErrors(errors);
    if (hasError) {
      // Show all error messages as toasts
      Object.values(errors).forEach((error) => {
        toast.error(error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
      return false;
    }

    return true;
  };

  const prepareTransactionDetails = async () => {
    const details: Record<string, string> = {
      "Service Type":
        selectedService.charAt(0).toUpperCase() + selectedService.slice(1),
      Email: formData.email,
    };

    switch (selectedService) {
      case "airtime":
        details["Phone Number"] = formData.phoneNumber;
        details["Network"] = formData.network;
        details["Amount"] = `₦${formData.amount}`;
        break;
      case "data":
        details["Phone Number"] = formData.phoneNumber;
        details["Network"] = formData.network;
        // Find the selected data bundle name
        const dataBundle = servicesData?.data.data_plans[formData.network]
          ?.flatMap((group) => group.PRODUCT)
          .find((plan) => plan.PRODUCT_CODE === formData.dataBundle);
        details["Data Bundle"] = dataBundle
          ? `${dataBundle.PRODUCT_NAME} - ₦${dataBundle.PRODUCT_AMOUNT}`
          : "";
        break;
      case "cable":
        details["Provider"] = formData.cableProvider;
        // Find the selected cable package
        const cablePackage = servicesData?.data.cable.TV_ID[
          formData.cableProvider
        ]
          ?.flatMap((group) => group.PRODUCT)
          .find((pkg) => pkg.PACKAGE_ID === formData.dataBundle);
        details["Package"] = cablePackage
          ? `${cablePackage.PACKAGE_NAME} - ₦${cablePackage.PACKAGE_AMOUNT}`
          : "";
        details["Smart Card"] = formData.smartCardNumber;
        break;
      case "electricity":
        details["Company"] =
          servicesData?.data.elecricity.find(
            (provider) => provider.code === formData.discoCompany
          )?.name || "";
        details["Meter Number"] = formData.meterNumber;
        details["Amount"] = `₦${formData.amount}`;
        break;
      case "education":
        details["Institution"] =
          servicesData?.data.education.EXAM_TYPE.find(
            (exam) => exam.PRODUCT_CODE === formData.institution
          )?.PRODUCT_DESCRIPTION || "";
        details["Student ID"] = formData.studentId;
        break;
      case "others":
        details["Service"] = formData.serviceType;
        details["Amount"] = `₦${formData.amount}`;
        break;
    }

    // Generate a random transaction ID
    // details["Transaction ID"] =
    //   `TRX${Math.random().toString(36).substring(2, 10).toUpperCase()}`;

    // Make call to paya server to get transaction id

    const resolve = async () => {
      try {
        // Prepare payload based on selectedService and formData
        let payload: Record<string, any> = {
          service: selectedService,
          email: formData.email,
        };

        switch (selectedService) {
          case "airtime":
            payload = {
              ...payload,
              phone_number: formData.phoneNumber,
              network: formData.network,
              amount: formData.amount,
            };
            break;
          case "data":
            payload = {
              ...payload,
              phoneNumber: formData.phoneNumber,
              network: formData.network,
              dataBundle: formData.dataBundle,
            };
            break;
          case "cable":
            payload = {
              ...payload,
              cableProvider: formData.cableProvider,
              package: formData.dataBundle,
              smartCardNumber: formData.smartCardNumber,
            };
            break;
          case "electricity":
            payload = {
              ...payload,
              discoCompany: formData.discoCompany,
              meterNumber: formData.meterNumber,
              amount: formData.amount,
            };
            break;
          case "education":
            payload = {
              ...payload,
              institution: formData.institution,
              studentId: formData.studentId,
            };
            break;
          case "others":
            payload = {
              ...payload,
              serviceType: formData.serviceType,
              amount: formData.amount,
            };
            break;
        }

        setLoading(true);

        const response = await fetch("/api/airtime/resolve", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          setLoading(false);
          throw new Error("Failed to resolve transaction");
        }

        const result = await response.json();
        // Optionally, update details["Transaction ID"] with result.transactionId if returned
        if (result.data.ref) {
          details["Transaction ID"] = result.data.ref;
        }

        onOpen();
        setLoading(false);
      } catch (err) {
        toast.error("Failed to resolve transaction. Please try again.");
      }
    };

    await resolve();
    setTransactionDetails(details);
  };

  const handleCompletePurchase = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Don't proceed if validation fails
    }

    prepareTransactionDetails();
  };

  const config = {
    public_key:
      process.env.FLUTTERWAVE_PUBLIC ||
      "FLWPUBK-ba3e4de6b628ca5e7ae005ede0a9d507-X",
    tx_ref: transactionDetails["Transaction ID"] || Date.now().toString(),
    amount: parseFloat(formData.amount) || 0,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: formData.email,
      phone_number: formData.phoneNumber || "",
      name: "Customer",
    },
    customizations: {
      title: `${selectedService} Purchase`,
      description: `Payment for ${selectedService}`,
      logo: "https://appapi.deeppaya.com/logo.png",
    },
  };

  const paystackConfig = {
    reference:
      transactionDetails["Transaction ID"] || new Date().getTime().toString(),
    email: formData.email,
    amount: (parseFloat(formData.amount) || 0) * 100, // Paystack uses kobo (multiply by 100)
    publicKey:
      process.env.PAYSTACK_PUBLIC_KEY ||
      "pk_live_8061efbaf404e099826b43d312e75cee3d9efd22",
    currency: "NGN",
    channels: ["card", "bank", "ussd", "bank_transfer", "mobile_money"],
    metadata: {
      custom_fields: [
        {
          display_name: "Service Type",
          variable_name: "service_type",
          value: selectedService,
        },
      ],
    },
  };

  // Initialize Paystack payment
  const initializePayment = usePaystackPayment(paystackConfig);

  // Replace the handleFlutterwavePayment function with this
  const handlePaystackPayment = () => {
    initializePayment({
      onSuccess: (response) => {
        console.log("Payment successful:", response);
        toast.success("Payment successful!");
        verifyTransaction(response.reference);
        onClose();
      },
      onClose: () => {
        toast.info("Payment modal closed");
        onClose();
      },
    });
  };

  const HandleFlutterwavePayment = useFlutterwave(config);

  const handleFlutterwavePayment = () => {
    HandleFlutterwavePayment({
      callback: (response) => {
        console.log(response);
        if (response.status === "successful") {
          // Handle successful payment (e.g., send to your backend)
          setLoading(true);
          console.log(response);
          toast.success("Payment successful!");
          console.log("Payment successful:", response);
        } else {
          toast.error("Payment was not successful");
        }
        closePaymentModal();
        onClose();
      },
      onClose: () => {
        toast.info("Payment modal closed");
        onClose();
      },
    });
  };

  const useFlutterwavePayment = () => {
    const config = {
      public_key: process.env.FLUTTERWAVE_PUBLIC || "YOUR_PUBLIC_KEY",
      tx_ref: transactionDetails["Transaction ID"] || Date.now().toString(),
      amount: parseFloat(formData.amount) || 0,
      currency: "NGN",
      payment_options: "card,mobilemoney,ussd",
      customer: {
        email: formData.email,
        phone_number: formData.phoneNumber || "",
        name: "Customer",
      },
      customizations: {
        title: `${selectedService} Purchase`,
        description: `Payment for ${selectedService}`,
        logo: "https://appapi.deeppaya.com/logo.png",
      },
    };

    const flutterwavePay = useFlutterwave(config);

    const initiatePayment = () => {
      flutterwavePay({
        callback: (response) => {
          console.log(response);
          if (response.status === "successful") {
            setLoading(true);
            toast.success("Payment successful!");
            console.log("Payment successful:", response);
          } else {
            toast.error("Payment was not successful");
          }
          closePaymentModal();
          onClose();
        },
        onClose: () => {
          toast.info("Payment modal closed");
          onClose();
        },
      });
    };

    return initiatePayment;
  };

  // Usage in your component:
  const flutterwavePaymentHandler = useFlutterwavePayment();

  // const handleFlutterwavePayment = () => {
  //   // Load Flutterwave script dynamically
  //   const script = document.createElement("script");
  //   script.src = "https://checkout.flutterwave.com/v3.js";
  //   script.async = true;

  //   script.onload = () => {
  //     // Now that the script is loaded, we can use FlutterwaveCheckout
  //     const flutterwaveConfig = {
  //       public_key:
  //         process.env.FLUTTERWAVE_PUBLIC ||
  //         "FLWPUBK_TEST-XXXXXXXXXXXXXXXXXXXXX",
  //       tx_ref: transactionDetails["Transaction ID"] || Date.now().toString(),
  //       amount: parseFloat(formData.amount) || 0,
  //       currency: "NGN",
  //       payment_options: "card,ussd,mobilemoney",
  //       customer: {
  //         email: formData.email,
  //         phone_number: formData.phoneNumber || "",
  //         name: "Customer",
  //       },
  //       customizations: {
  //         title: `${selectedService} Purchase`,
  //         description: `Payment for ${selectedService}`,
  //         logo: "https://appapi.deeppaya.com/logo.png",
  //       },
  //       callback: function (response: any) {
  //         console.log(response);
  //         if (response.status === "successful") {
  //           setLoading(true);
  //           toast.success("Payment successful!");
  //           console.log("Payment successful:", response);

  //           // You might want to verify the transaction on your backend here
  //           verifyTransaction(response.transaction_id);
  //         } else {
  //           toast.error("Payment was not successful");
  //         }
  //         onClose();
  //       },
  //       onclose: function () {
  //         toast.info("Payment modal closed");
  //         onClose();
  //       },
  //     };

  //     // @ts-ignore - FlutterwaveCheckout is added to window by the script
  //     window.FlutterwaveCheckout(flutterwaveConfig);
  //   };

  //   script.onerror = () => {
  //     toast.error("Failed to load payment processor");
  //     onClose();
  //   };

  //   document.body.appendChild(script);

  //   // Cleanup function to remove the script when component unmounts
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // };

  // const handleFlutterwavePayment = () => {
  //   // Load Flutterwave script dynamically
  //   const script = document.createElement("script");
  //   script.src = "https://checkout.flutterwave.com/v3.js";
  //   script.async = true;

  //   script.onload = () => {
  //     // Now that the script is loaded, we can use FlutterwaveCheckout
  //     const flutterwaveConfig = {
  //       public_key:
  //         process.env.FLUTTERWAVE_PUBLIC ||
  //         "FLWPUBK-ba3e4de6b628ca5e7ae005ede0a9d507-X",
  //       tx_ref: transactionDetails["Transaction ID"] || Date.now().toString(),
  //       amount: parseFloat(formData.amount) || 0,
  //       currency: "NGN",
  //       payment_options: "card,ussd,mobilemoney",
  //       customer: {
  //         email: formData.email,
  //         phone_number: formData.phoneNumber || "",
  //         name: "Customer",
  //       },
  //       customizations: {
  //         title: `${selectedService} Purchase`,
  //         description: `Payment for ${selectedService}`,
  //         logo: "https://appapi.deeppaya.com/logo.png",
  //       },
  //       callback: function (response: any) {
  //         console.log(response);
  //         if (response.status === "successful") {
  //           setLoading(true);
  //           toast.success("Payment successful!");
  //           console.log("Payment successful:", response);

  //           // You might want to verify the transaction on your backend here
  //           verifyTransaction(response.transaction_id);
  //         } else {
  //           toast.error("Payment was not successful");
  //         }
  //         onClose();
  //       },
  //       onclose: function () {
  //         toast.info("Payment modal closed");
  //         onClose();
  //       },
  //     };

  //     // @ts-ignore - FlutterwaveCheckout is added to window by the script
  //     window.FlutterwaveCheckout(flutterwaveConfig);
  //   };

  //   script.onerror = () => {
  //     toast.error("Failed to load payment processor");
  //     onClose();
  //   };

  //   document.body.appendChild(script);

  //   // Cleanup function to remove the script when component unmounts
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // };

  const verifyTransaction = async (transactionId: string) => {
    try {
      const response = await fetch("/api/verify-transaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ transactionId }),
      });

      if (!response.ok) {
        throw new Error("Verification failed");
      }

      const result = await response.json();
      if (result.status === "success") {
        toast.success("Transaction verified successfully");
      } else {
        toast.warning("Transaction verification pending");
      }
    } catch (error) {
      console.error("Verification error:", error);
      toast.error("Error verifying transaction");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full min-h-svh bg-gray-50 mb-20">
        <div className="mx-auto max-w-[75rem] px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold hidden md:block text-gray-900 text-center lg:text-left">
              The <small className="text-primary">BEST</small> place to
              subscribe / Buy <br /> <small className="text-primary">VTU</small>{" "}
              services.
            </h1>
            <h1 className="text-3xl font-bold md:hidden text-gray-900 text-center lg:text-left">
              The <small className="text-primary">BEST</small> place to
              subscribe / Buy <br /> <small className="text-primary">VTU</small>{" "}
              services.
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Service Cards */}
            <div className="space-y-6">
              <p className="text-gray-600 mt-2 text-center lg:text-left">
                What are you buying today?
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-4">
                {services.map((service) => {
                  const IconComponent = service.icon;
                  const isSelected = selectedService === service.id;

                  return (
                    <div
                      role="presentation"
                      key={service.id}
                      onClick={() =>
                        handleServiceClick(
                          service.id == "others" ? "airtime" : service.id
                        )
                      }
                      className={`
                      relative p-4 sm:p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105
                      ${
                        isSelected
                          ? `${service.color} border-transparent text-white shadow-lg`
                          : "bg-white border-gray-200 hover:border-gray-300 text-gray-700"
                      }
                    `}
                    >
                      <div className="flex flex-col items-center space-y-3">
                        <div
                          className={`
                        p-3 rounded-full transition-all duration-300
                        ${isSelected ? "bg-white/20" : "bg-gray-100"}
                      `}
                        >
                          <IconComponent
                            size={24}
                            className={
                              isSelected ? "text-white" : "text-gray-600"
                            }
                          />
                        </div>
                        <span className="font-medium text-sm text-center">
                          {service.name}
                        </span>
                      </div>

                      {isSelected && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Forms */}
            <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 capitalize">
                  {selectedService} Purchase
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  Fill in the details below to complete your purchase
                </p>
              </div>

              <div className="space-y-6">
                {renderForm()}

                {!loading && !error && (
                  <div className="pt-6 border-t border-gray-200">
                    <button
                      onClick={handleCompletePurchase}
                      className={`
      w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-300 transform hover:scale-105
      ${services.find((s) => s.id === selectedService)?.color || "bg-primary"}
      ${services.find((s) => s.id === selectedService)?.hoverColor || "hover:bg-primary"}
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:primary
    `}
                    >
                      Complete Purchase
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} placement="auto" onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Complete Transaction
              </ModalHeader>
              <ModalBody>
                <h1 className="font-medium mb-4">Transaction Details</h1>
                <div className="space-y-3">
                  {Object.entries(transactionDetails).map(([p, value]) => (
                    <div
                      key={p}
                      className="flex items-center justify-between text-sm"
                    >
                      <p className="text-gray-600">{p}</p>
                      <p className="font-medium text-right">{value}</p>
                    </div>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <div className="flex flex-col w-full mb-5 text-center gap-2">
                  <Button
                    className="w-full text-white bg-primary border-1 border-borderGray"
                    onPress={handlePaystackPayment}
                  >
                    Confirm Purchase
                  </Button>
                  <Button
                    variant="light"
                    onPress={onClose}
                    className="text-[14px] opacity-80"
                  >
                    Cancel
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Buy;
