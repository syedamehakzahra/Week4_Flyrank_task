import { useState } from 'react'
import Modal from '../playground/Modal'
import CustomTabs from '../playground/Tabs'
import Disclosure from '../playground/Disclosure'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs'

export default function Playground() {
  const [count, setCount] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const tabData = [
    {
      id: 'tab1',
      label: 'First Tab',
      content: (
        <p className="text-gray-700">
          This is the content of the first tab. You can put any React components
          here.
        </p>
      ),
    },
    {
      id: 'tab2',
      label: 'Second Tab',
      content: (
        <p className="text-gray-700">
          This is the content of the second tab. Arrow keys navigate between
          tabs.
        </p>
      ),
    },
    {
      id: 'tab3',
      label: 'Third Tab',
      content: (
        <p className="text-gray-700">
          This is the content of the third tab. Follows WAI-ARIA practices.
        </p>
      ),
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
          Interactive Playground
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Explore React features and Tailwind CSS utilities through interactive
          demonstrations of accessible component patterns.
        </p>

        <div className="space-y-10 text-left">
          {/* Modal Demo */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Modal Component
            </h2>
            <p className="text-gray-600 mb-4">
              A modal dialog with focus trap, Escape key support, and focus
              return.
            </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Open Modal
              </button>
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Example Modal"
            >
              <p className="mb-4">
                This modal demonstrates proper accessibility features:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Focus trap keeps focus inside the modal</li>
                <li>Press Escape to close</li>
                <li>Focus returns to trigger on close</li>
                <li>Proper ARIA attributes</li>
              </ul>
            </Modal>
          </div>

          {/* Tabs Demo */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Tabs Component
            </h2>
            <p className="text-gray-600 mb-4">
              Accessible tabs featuring smooth arrow key navigation and comprehensive ARIA attributes.
            </p>
            <CustomTabs tabs={tabData} />
          </div>

          {/* shadcn/ui Dialog Comparison */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Radix Dialog Comparison
            </h2>
            <p className="text-gray-600 mb-4">
              Radix-based accessible dialog with robust focus management and ARIA support.
            </p>
            <Dialog>
              <DialogTrigger className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium px-4 py-2 transition-all duration-300 hover:shadow-lg">
                Open shadcn Dialog
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Example shadcn Dialog</DialogTitle>
                </DialogHeader>
                <p className="text-gray-700">
                  This shadcn/ui dialog uses Radix primitives and includes
                  built-in focus trap, Escape handling, and ARIA attributes.
                </p>
              </DialogContent>
            </Dialog>
          </div>

          {/* shadcn/ui Tabs Comparison */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Radix Tabs Comparison
            </h2>
            <p className="text-gray-600 mb-4">
              Radix-based accessible tabs with consistent API and modern styling.
            </p>
            <Tabs defaultValue="tab1">
              <TabsList>
                {tabData.map(tab => (
                  <TabsTrigger key={tab.id} value={tab.id}>
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {tabData.map(tab => (
                <TabsContent key={tab.id} value={tab.id}>
                  {tab.content}
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Disclosure Demo */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Disclosure Component
            </h2>
            <p className="text-gray-600 mb-4">
              Smooth collapsible sections with proper aria-expanded state management.
            </p>
            <Disclosure title="First Disclosure Section">
              <p className="text-gray-700">
                This is the content of the first disclosure. Click the header to
                toggle visibility. Supports keyboard navigation with Enter and
                Space.
              </p>
            </Disclosure>
            <Disclosure title="Second Disclosure Section">
              <p className="text-gray-700">
                This is the content of the second disclosure. Each disclosure
                manages its own state independently.
              </p>
            </Disclosure>
            <Disclosure title="Third Disclosure Section">
              <p className="text-gray-700">
                Disclosures follow WAI-ARIA Authoring Practices for accessibility.
              </p>
            </Disclosure>
          </div>

          {/* Counter Demo */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Interactive Counter
            </h2>
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => setCount(c => c - 1)}
                className="bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Decrease
              </button>
              <span className="text-3xl font-bold text-gray-900 min-w-[80px]">
                {count}
              </span>
              <button
                onClick={() => setCount(c => c + 1)}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Increase
              </button>
            </div>
            {count !== 0 && (
              <button
                onClick={() => setCount(0)}
                className="mt-4 text-indigo-600 hover:text-indigo-800 underline underline-offset-4 transition-colors"
              >
                Reset
              </button>
            )}
          </div>

          {/* Tailwind CSS Features */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 max-w-2xl mx-auto text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Tailwind CSS Features
            </h3>
            <div className="space-y-4">
              <div className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-indigo-400 rounded-r-lg">
                <p className="text-indigo-900">
                  <strong>Info:</strong> This project uses Tailwind CSS v3 for modern styling.
                </p>
              </div>
              <div className="p-5 bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-400 rounded-r-lg">
                <p className="text-emerald-900">
                  <strong>Success:</strong> All components are fully responsive across devices.
                </p>
              </div>
              <div className="p-5 bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-400 rounded-r-lg">
                <p className="text-amber-900">
                  <strong>Note:</strong> This is a demonstration message showcasing alert styling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
