import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Edit3, Check, X } from 'lucide-react';

const TaskList = ({ tasks, onToggleTask, onDeleteTask, onEditTask }) => {
  const [editingId, setEditingId] = React.useState(null);
  const [editText, setEditText] = React.useState('');

  const handleEditStart = (task) => {
    setEditingId(task.id);
    setEditText(task.text);
  };

  const handleEditSave = () => {
    if (editText.trim()) {
      onEditTask(editingId, editText.trim());
    }
    setEditingId(null);
    setEditText('');
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditText('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEditSave();
    } else if (e.key === 'Escape') {
      handleEditCancel();
    }
  };

  if (tasks.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12"
      >
        <div className="text-6xl mb-4">📝</div>
        <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-wider">
          NO TASKS YET
        </h3>
        <p className="text-gray-300 text-lg font-bold">
          ADD YOUR FIRST TASK TO GET STARTED
        </p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-3">
      <AnimatePresence>
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, x: -20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            className={`
              group relative overflow-hidden rounded-none border-4 
              ${task.completed 
                ? 'border-green-500 bg-gradient-to-r from-green-900/50 to-green-800/50' 
                : 'border-white bg-gradient-to-r from-gray-900/80 to-black/80'
              }
              shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)]
              hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.4)]
              transition-all duration-200
              backdrop-blur-sm
            `}
          >
            {/* Brutal accent line */}
            <div className={`
              absolute top-0 left-0 w-full h-2 
              ${task.completed ? 'bg-green-400' : 'bg-yellow-400'}
            `} />
            
            <div className="p-4 flex items-center gap-4">
              {/* Checkbox */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onToggleTask(task.id)}
                className={`
                  flex-shrink-0 w-8 h-8 rounded-none border-4 border-white
                  ${task.completed 
                    ? 'bg-green-500 text-white' 
                    : 'bg-transparent hover:bg-white/20'
                  }
                  flex items-center justify-center font-black text-lg
                  transition-all duration-200
                  shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]
                  hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)]
                `}
              >
                {task.completed && <Check size={16} />}
              </motion.button>

              {/* Task content */}
              <div className="flex-1 min-w-0">
                {editingId === task.id ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={handleKeyPress}
                    onBlur={handleEditSave}
                    autoFocus
                    className="
                      w-full bg-transparent text-white text-lg font-bold
                      border-none outline-none border-b-4 border-yellow-400
                      focus:border-yellow-300 pb-1
                      placeholder-gray-400
                    "
                    placeholder="Enter task..."
                  />
                ) : (
                  <motion.span
                    layout
                    className={`
                      block text-lg font-black uppercase tracking-wide
                      ${task.completed 
                        ? 'text-green-300 line-through' 
                        : 'text-white'
                      }
                      cursor-pointer hover:text-yellow-300 transition-colors
                      break-words
                    `}
                    onClick={() => handleEditStart(task)}
                  >
                    {task.text}
                  </motion.span>
                )}
                
                <div className="flex items-center gap-2 mt-1 text-sm font-bold text-gray-400">
                  <span>{new Date(task.createdAt).toLocaleDateString()}</span>
                  {task.completed && (
                    <span className="text-green-400">✓ COMPLETED</span>
                  )}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {editingId === task.id ? (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleEditSave}
                      className="
                        p-2 bg-green-500 text-white rounded-none border-2 border-white
                        hover:bg-green-400 transition-colors
                        shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]
                      "
                    >
                      <Check size={16} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleEditCancel}
                      className="
                        p-2 bg-gray-500 text-white rounded-none border-2 border-white
                        hover:bg-gray-400 transition-colors
                        shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]
                      "
                    >
                      <X size={16} />
                    </motion.button>
                  </>
                ) : (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleEditStart(task)}
                      className="
                        p-2 bg-blue-500 text-white rounded-none border-2 border-white
                        hover:bg-blue-400 transition-colors
                        shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]
                        hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.4)]
                      "
                    >
                      <Edit3 size={16} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => onDeleteTask(task.id)}
                      className="
                        p-2 bg-red-500 text-white rounded-none border-2 border-white
                        hover:bg-red-400 transition-colors
                        shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]
                        hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.4)]
                      "
                    >
                      <Trash2 size={16} />
                    </motion.button>
                  </>
                )}
              </div>
            </div>

            {/* Brutal corner accent */}
            <div className={`
              absolute bottom-0 right-0 w-0 h-0 
              border-l-[20px] border-b-[20px]
              ${task.completed 
                ? 'border-l-transparent border-b-green-400' 
                : 'border-l-transparent border-b-yellow-400'
              }
            `} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TaskList;