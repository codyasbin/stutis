"use client";

import { useState, useRef, useEffect } from "react";
import { Search, Menu, X, Download, Share2, ZoomIn, ZoomOut, Home, BookOpen, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { stutiData } from "./data";


export default function HomePage() {
  const [selectedStuti, setSelectedStuti] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const filteredData = stutiData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDownload = async () => {
    if (!selectedStuti) return;
    try {
      const response = await fetch(selectedStuti.image);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${selectedStuti.title}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const handleShare = async () => {
    if (!selectedStuti) return;
    if (navigator.share) {
      try {
        await navigator.share({
          title: selectedStuti.title,
          text: `${selectedStuti.title} - ${selectedStuti.subCategory}`,
          url: window.location.href,
        });
      } catch (error) {
        console.error("Share failed:", error);
      }
    }
  };

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.5, 1));

  const handleMouseDown = (e) => {
    if (zoom > 1) {
      setDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (dragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => setDragging(false);

  const handleTouchStart = (e) => {
    if (zoom > 1) {
      const touch = e.touches[0];
      setDragging(true);
      setDragStart({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e) => {
    if (dragging && zoom > 1) {
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y,
      });
    }
  };

  useEffect(() => {
    if (zoom === 1) {
      setPosition({ x: 0, y: 0 });
    }
  }, [zoom]);

  useEffect(() => {
    if (selectedStuti) {
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [selectedStuti]);

  useEffect(() => {
    document.body.style.overflow = selectedStuti ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedStuti]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedStuti(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setMenuOpen(true)}
            className="p-2 rounded-lg hover:bg-orange-50 transition-colors"
          >
            <Menu className="w-6 h-6 text-orange-600" />
          </button>
          
          <h1 className="text-xl font-bold text-orange-600 flex items-center gap-2">
            <BookOpen className="w-6 h-6" />
            Stuti Path
          </h1>

          <div className="w-10" />
        </div>

        {/* Search Bar */}
        <div className="px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-orange-400" />
            <input
              type="text"
              placeholder="Search stutis..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-2 border-orange-200 rounded-full focus:outline-none focus:border-orange-400 transition-colors"
            />
          </div>
        </div>
      </header>

      {/* Side Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-50"
            />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed left-0 top-0 bottom-0 w-80 bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-orange-600">Menu</h2>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-orange-50 transition-colors"
                  >
                    <X className="w-6 h-6 text-orange-600" />
                  </button>
                </div>

                <nav className="space-y-2">
                  <button
                    onClick={() => {
                      setSelectedStuti(null);
                      setMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-50 transition-colors text-left"
                  >
                    <Home className="w-5 h-5 text-orange-600" />
                    <span className="font-medium">Home</span>
                  </button>

                  <div className="pt-4 border-t border-orange-100">
                    <p className="px-4 text-sm font-semibold text-gray-500 mb-2">
                      All Stutis
                    </p>
                    {stutiData.map((stuti) => (
                      <button
                        key={stuti.id}
                        onClick={() => {
                          setSelectedStuti(stuti);
                          setMenuOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-50 transition-colors text-left"
                      >
                        <BookOpen className="w-5 h-5 text-orange-400" />
                        <div>
                          <p className="font-medium text-sm">{stuti.title}</p>
                          <p className="text-xs text-gray-500">
                            {stuti.subCategory}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                  {/* copyright */}
                  <p className="mt-8 text-xs text-gray-400 text-center">
                    © {new Date().getFullYear()} codyasbin. All rights reserved.
                  </p>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>


        <main className="px-4 py-6 max-w-7xl mx-auto">
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2 bg-linear-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
            🙏 Jay Shree Sitaram
              </h2>
              <p className="text-gray-600">Choose a stuti to begin your devotional path</p>
            </div>

            {filteredData.length === 0 ? (
              <p className="text-center text-gray-500 py-12 animate-pulse">
            No stutis found matching "{searchQuery}"
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((stuti, index) => (
              <motion.div
                key={stuti.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                onClick={() => setSelectedStuti(stuti)}
                className="relative bg-white rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              >
                {/* Glow overlay */}
                <div className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-orange-200/60 to-yellow-100/40 filter blur-2xl mix-blend-screen" />
                </div>

                <div className="relative h-64 bg-linear-to-br from-orange-100 to-orange-50 flex items-center justify-center">
              <img
                src={stuti.image}
                alt={stuti.title}
                className="max-h-full max-w-full object-contain transform transition-transform duration-300 group-hover:scale-105"
              />
                </div>
                <div className="p-4">
              <h3 className="font-bold text-lg text-gray-800 mb-1 group-hover:animate-pulse">
                {stuti.title}
              </h3>
              <p className="text-sm text-orange-600">{stuti.subCategory}</p>
                </div>
              </motion.div>
            ))}
              </div>
            )}
          </div>
        </main>

        {/* Full-screen Stuti Viewer */}
        <AnimatePresence>
          {selectedStuti && (
            <motion.div
              key="viewer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-60 bg-black flex flex-col"
              style={{ height: "100dvh" }}
            >
              {/* Top bar */}
              <div className="shrink-0 flex items-center gap-2 px-2 py-2 bg-black/70 backdrop-blur-sm text-white">
                <button
                  onClick={() => setSelectedStuti(null)}
                  className="p-2 rounded-full hover:bg-white/10 active:bg-white/20 transition-colors"
                  aria-label="Back"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <h2 className="flex-1 font-semibold text-base text-center truncate px-2">
                  {selectedStuti.title}
                </h2>
                <div className="w-10" />
              </div>

              {/* Image area */}
              <div
                className="relative flex-1 overflow-auto"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleMouseUp}
              >
                <div className="flex items-center justify-center min-h-full p-2">
                  <img
                    ref={imageRef}
                    src={selectedStuti.image}
                    alt={selectedStuti.title}
                    style={{
                      transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                      cursor: zoom > 1 ? (dragging ? "grabbing" : "grab") : "default",
                      transition: dragging ? "none" : "transform 0.2s ease-out",
                      maxWidth: zoom === 1 ? "100%" : "none",
                      userSelect: "none",
                    }}
                    className="max-h-full object-contain"
                    draggable={false}
                  />
                </div>
              </div>

              {/* Bottom control bar */}
              <div className="shrink-0 flex items-center justify-center gap-2 px-4 py-3 bg-black/70 backdrop-blur-sm">
                <button
                  onClick={handleZoomOut}
                  disabled={zoom <= 1}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="w-5 h-5 text-white" />
                </button>
                <span className="text-sm font-medium text-white/80 min-w-14 text-center">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  onClick={handleZoomIn}
                  disabled={zoom >= 3}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="w-5 h-5 text-white" />
                </button>
                <div className="w-px h-6 bg-white/20 mx-1" />
                <button
                  onClick={handleDownload}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 transition-colors"
                  aria-label="Download"
                >
                  <Download className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={handleShare}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 transition-colors"
                  aria-label="Share"
                >
                  <Share2 className="w-5 h-5 text-white" />
                </button>
              </div>

              {zoom > 1 && (
                <p className="absolute bottom-20 left-0 right-0 text-center text-xs text-white/60">
                  Drag to pan • Pinch to zoom on mobile
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  );
}