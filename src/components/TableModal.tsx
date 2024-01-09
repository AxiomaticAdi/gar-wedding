import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useModal } from "../context/TableModalContext";
import { Guest } from "../types";
import UtensilsIcon from "../icons/UtensilsIcon";
import { getOtherTableGuests } from "../logic";

interface TableModalProps {
	guest: Guest | undefined;
	guestList: Guest[];
}

export default function TableModal({ guest, guestList }: TableModalProps) {
	const { isModalOpen, setIsModalOpen, toggleModal } = useModal();

	// Return nothing if undefined
	if (guest === undefined) {
		return null;
	}

	const otherTableGuests = getOtherTableGuests(guest, guestList);

	return (
		<Transition.Root show={isModalOpen} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={setIsModalOpen}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
								<div>
									<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
										<UtensilsIcon aria-hidden="true" />
									</div>
									<div className="mt-3 text-center sm:mt-5">
										<Dialog.Title
											as="h3"
											className="text-base font-semibold leading-6 text-gray-900"
										>
											Table {guest.receptionTableNumber}
										</Dialog.Title>
										<div className="flex flex-col mt-2">
											{otherTableGuests.map((guest) => (
												<p key={guest} className="text-base text-gray-900 mx-4">
													{guest}
												</p>
											))}
										</div>
									</div>
								</div>
								<div className="mt-5 sm:mt-6">
									<button
										type="button"
										className="inline-flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
										onClick={toggleModal}
									>
										Close
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
