// Centralized drag-and-drop settings for the app
// Use these settings to control DnD behavior in a human-readable way

const dndSettings = {
  // The header you are currently dragging
  draggedHeader: {
    dragSpeedMultiplier: 1, // 1 = normal speed; <1 = slower, >1 = faster
    leavesPlaceholderBehind: true, // true = leaves a placeholder where it started
    visibleCloneWhileDragging: true, // true = shows a clone of the header while dragging
    dragAxis: "vertical", // 'vertical', 'horizontal', or 'free'
    delayBeforeDragStartsMs: 0, // ms to wait before drag starts
  },

  // The header you are dragging onto (the one being collided with)
  collidedHeader: {
    // --- UX-named settings ---
    // How fast Header B moves out of the way when Header A gets close (ms, lower = faster)
    howFastHeaderBMovesWhenMakingRoom: 400,
    // How much Header A can overlap Header B before Header B reacts (in px)
    howMuchOverlapBeforeHeaderBReactsPx: 0,
    // Should Header B snap instantly or glide smoothly to its new spot?
    shouldHeaderBSnapOrGlide: "glide", // "snap" or "glide"
    // --- Previous settings (preserved) ---
    growScale: 1.1, // scale factor for how much the header grows when collided (1 = no growth)
    // How many extra pixels of height Header B gets when hugged (grows downward)
    howMuchHeaderBGrowsDownPx: 60,
    // Direction to grow when hugged: 'up' or 'down' (will be set dynamically based on drag direction)
    growDirection: "down", // 'up' or 'down'
    // --- Drop zone balancing ---
    // Should the drop zone be centered in the grown area? (true = center, false = original position)
    centerDropZoneInGrownArea: true,
  },

  // The card you are currently dragging
  draggedCard: {
    dragSpeedMultiplier: 1,
    leavesPlaceholderBehind: true,
    visibleCloneWhileDragging: true,
    dragAxis: "vertical",
    delayBeforeDragStartsMs: 0,
    // Card-specific drag overlay settings
    showDragOverlay: true, // true = shows a ghost following the mouse
    overlayOpacity: 0.8, // opacity of the drag overlay (0-1)
    overlayScale: 1.05, // scale of the drag overlay (1 = normal size)
    overlayRotation: 0, // rotation in degrees for the drag overlay
    followMouseSmoothly: true, // true = overlay follows mouse smoothly, false = snaps
    dragOverlayZIndex: 1000, // z-index for the drag overlay
    // Placeholder settings
    placeholderVisible: false, // false = invisible placeholder left behind
  },

  // The card you are dragging onto (the one being collided with)
  collidedCard: {
    movesOutOfWayImmediately: false,
    snapToNewPosition: false,
    transitionSpeedMs: 400,
    wiggleRoomBeforeItMovesPx: 25,
  },

  // Collision and overlap settings
  collision: {
    strategy: "closestCenter", // or 'rectIntersection'
    allowOverlapping: true, // true = allows dragged item to overlap before things move
  },

  // Debugging and visual aids
  debug: {
    showDropZones: false,
    logCollisions: false,
  },
};

export default dndSettings;
