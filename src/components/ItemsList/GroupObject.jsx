import React, { useState } from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import EditableCard from "./EditableCard";
import GoalCard from "./GoalCard";
import GroupHeader from "./GroupHeader";

const GroupObject = ({
  groupData,
  cardItemArray,
  parentPath = "",
  crudBundle,
  setClickOutsideMessage,
  clickOutsideMessage,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Self-aware path generation - no level tracking needed
  const currentPath = parentPath
    ? `${parentPath}-${groupData.name}`
    : groupData.name;

  const handleToggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Always render as a group structure
  return (
    <div className="group-container">
      {/* Debug info */}
      <div style={{ fontSize: "12px", color: "red", padding: "4px" }}>
        Group: {groupData.name} | Items: {groupData.items?.length || 0} |
        CardArray: {cardItemArray?.length || 0}
      </div>

      {/* Group Header - Always visible with drop zone */}
      <GroupHeader
        groupName={groupData.name}
        itemCount={groupData.items?.length || 0}
        isCollapsed={isCollapsed}
        onToggleCollapsed={handleToggleCollapsed}
        onUpdateGroupName={crudBundle?.updateGroupName}
        droppableId={`${currentPath}-header`}
        isRoot={groupData.name === "root"}
      />

      {/* Group Content - Collapsible with drop zone */}
      {!isCollapsed && (
        <Droppable droppableId={`${currentPath}-content`}>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="group-content"
            >
              {groupData.items?.map((item, itemIndex) => {
                // Debug each item
                console.log(`Item ${itemIndex}:`, item, typeof item);

                // If item is a string (card ID), render as card
                if (typeof item === "string") {
                  return (
                    <Draggable key={item} draggableId={item} index={itemIndex}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {/* Find the card data */}
                          {(() => {
                            const cardData = cardItemArray?.find(
                              (card) => card.id === item
                            );
                            if (!cardData) return null;

                            return cardData.type === "goal" ? (
                              <GoalCard
                                goal={cardData}
                                setEditedGoal={crudBundle?.updateCardItem}
                                setDeletedGoal={crudBundle?.deleteCardItem}
                                currentEditedCardRef={null}
                                index={itemIndex}
                              />
                            ) : (
                              <EditableCard
                                cardItem={cardData}
                                setEditedCard={crudBundle?.updateCardItem}
                                setDeletedCard={crudBundle?.deleteCardItem}
                                setAddedCard={() => {}} // Not used
                                setAddedGroup={() => {}} // Not used
                                setClickOutsideMessage={setClickOutsideMessage}
                                clickOutsideMessage={clickOutsideMessage}
                                index={itemIndex}
                                onCreateGroup={crudBundle?.createGroup}
                              />
                            );
                          })()}
                        </div>
                      )}
                    </Draggable>
                  );
                }

                // If item is a group object, render recursively
                if (
                  item &&
                  typeof item === "object" &&
                  item.name &&
                  item.items
                ) {
                  return (
                    <GroupObject
                      key={`group-${item.name}-${itemIndex}`}
                      groupData={item}
                      cardItemArray={cardItemArray}
                      parentPath={currentPath}
                      crudBundle={crudBundle}
                      setClickOutsideMessage={setClickOutsideMessage}
                      clickOutsideMessage={clickOutsideMessage}
                    />
                  );
                }

                return null;
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      )}
    </div>
  );
};

export default GroupObject;
