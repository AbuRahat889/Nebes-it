"use client";

interface SuccessNotificationProps {
  title?: string;
  description?: string;
  onClose?: () => void;
  onViewNotice?: () => void;
  onCreateAnother?: () => void;
}

export function SuccessNotification({
  title = "Notice Published Successfully",
  description = 'Your notice "Holiday Schedule - November 2025" has been published and is now visible to all selected departments.',
  onClose,
}: SuccessNotificationProps) {
  return (
    <div className="">
      <div className="w-full ">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
          >
            <g clip-path="url(#clip0_1_4997)">
              <path
                d="M48 0C21.5317 0 0 21.5317 0 48C0 74.4683 21.5317 96 48 96C74.4683 96 96 74.4683 96 48C96 21.5317 74.4683 0 48 0Z"
                fill="#10B981"
              />
              <path
                d="M72.3291 37.8291L46.3289 63.8286C45.5488 64.6086 44.5249 65.0012 43.501 65.0012C42.4771 65.0012 41.4531 64.6086 40.6731 63.8286L27.6733 50.8289C26.1089 49.2651 26.1089 46.7368 27.6733 45.1731C29.2371 43.6086 31.7646 43.6086 33.3291 45.1731L43.501 55.345L66.6733 32.1733C68.2371 30.6089 70.7646 30.6089 72.3291 32.1733C73.8928 33.7371 73.8928 36.2646 72.3291 37.8291Z"
                fill="#FAFAFA"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_4997">
                <rect width="96" height="96" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-center text-2xl font-semibold text-gray-900 mb-3">
          {title}
        </h1>

        {/* Description */}
        <p className="text-center text-gray-600 text-sm mb-8">{description}</p>

        {/* Action Buttons */}
        <div className="space-x-3">
          <button className="px-8 py-2 border-2 border-blue-500 text-blue-600 rounded-full font-medium hover:bg-blue-50">
            View Notice
          </button>
          <button className="px-8 py-2 border-2 border-orange-500 text-orange-500 rounded-full font-medium">
            + Create Another
          </button>
          <button
            className="px-8 py-2 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
