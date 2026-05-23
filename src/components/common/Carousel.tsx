"use client";

import { Children, useRef, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type CarouselProps = {
  label: string;
  children: ReactNode;
  itemClassName?: string;
  className?: string;
};

export function Carousel({
  label,
  children,
  itemClassName,
  className,
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({
    active: false,
    startX: 0,
    lastX: 0,
    lastTime: 0,
    startScrollLeft: 0,
    velocity: 0,
    moved: false,
  });

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track) return;
    track.classList.remove("snap-x", "scroll-smooth");
    dragState.current = {
      active: true,
      startX: event.clientX,
      lastX: event.clientX,
      lastTime: performance.now(),
      startScrollLeft: track.scrollLeft,
      velocity: 0,
      moved: false,
    };
    track.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track || !dragState.current.active) return;
    event.preventDefault();
    const delta = event.clientX - dragState.current.startX;
    const now = performance.now();
    const elapsed = Math.max(now - dragState.current.lastTime, 16);
    dragState.current.velocity = (event.clientX - dragState.current.lastX) / elapsed;
    dragState.current.lastX = event.clientX;
    dragState.current.lastTime = now;
    if (Math.abs(delta) > 4) dragState.current.moved = true;
    track.scrollLeft = dragState.current.startScrollLeft - delta;
  }

  function endDrag(event: PointerEvent<HTMLDivElement>) {
    const track = trackRef.current;
    const velocity = dragState.current.velocity;
    dragState.current.active = false;
    if (track?.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }
    if (!track) return;

    const projectedScroll = track.scrollLeft - velocity * 260;
    const cards = Array.from(track.children) as HTMLElement[];
    const nearest = cards.reduce((closest, card) => {
      const currentDistance = Math.abs(card.offsetLeft - projectedScroll);
      const closestDistance = Math.abs(closest.offsetLeft - projectedScroll);
      return currentDistance < closestDistance ? card : closest;
    }, cards[0]);

    track.classList.add("scroll-smooth");
    nearest?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
    window.setTimeout(() => {
      track.classList.add("snap-x");
    }, 260);
  }

  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent"
      />
      <div
        ref={trackRef}
        aria-label={label}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={(event) => {
          if (dragState.current.moved) {
            event.preventDefault();
            event.stopPropagation();
            dragState.current.moved = false;
          }
        }}
        className="flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 active:cursor-grabbing touch-pan-x select-none [scroll-padding-inline:1px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {Children.toArray(children).map((child, index) => (
          <div
            key={index}
            className={cn(
              "min-w-[82%] snap-start sm:min-w-[48%] lg:min-w-[31.5%]",
              itemClassName
            )}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
