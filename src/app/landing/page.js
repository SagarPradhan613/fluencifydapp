'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import Modal from '../components/Modal';
import Landing from './LandingComp/Landing';

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    localStorage.setItem('modalClosed', 'true');
  };

  const [openPrivacy, setOpenPrivacy] = useState(false);

  useEffect(() => {
    if (openPrivacy) {
      setIsModalOpen(true); // Open the modal
    } else {
      setIsModalOpen(false);
    }
  }, [openPrivacy]);

  useEffect(() => {
    const body = document.body;
    if (isModalOpen) {
      // Disable scrolling when the modal is open
      body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when the modal is closed
      body.style.overflow = "auto";
    }

    // Cleanup: Reset the overflow style when the component unmounts
    return () => {
      body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const handleToggleModal = () => {
    setOpenPrivacy(!openPrivacy); // Toggle the privacy state
  };
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Main content */}
        <div className="flex-1">
          <Modal isOpen={isModalOpen} handleToggleModal={handleToggleModal} onClose={handleCloseModal} setOpenPrivacy={setOpenPrivacy} openPrivacy={openPrivacy}></Modal>
          <Navbar setOpenPrivacy={setOpenPrivacy} handleToggleModal={handleToggleModal} />
          <Landing></Landing>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

export default page