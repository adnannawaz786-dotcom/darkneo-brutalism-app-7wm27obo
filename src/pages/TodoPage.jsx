import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Check, Trash2, Edit3, Save, Calendar, AlertCircle } from 'lucide-react';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('darkneo-todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('darkneo-todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim()) {
      const todo = {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
        priority: 'medium'
      };
      setTodos([todo, ...todos]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = () => {
    if (editText.trim()) {
      setTodos(todos.map(todo =>
        todo.id === editingId ? { ...todo, text: editText.trim() } : todo
      ));
    }
    setEditingId(null);
    setEditText('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const stats = {
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    active: todos.filter(t => !t.completed).length
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              DARK
            </span>
            <span className="text-white">NEO</span>
          </h1>
          <div className="w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mb-4"></div>
          <p className="text-xl text-gray-400 font-mono uppercase tracking-widest">
            BRUTALIST TODO SYSTEM
          </p>
        </motion.div>

        {/* Stats Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          <div className="bg-black/50 border-2 border-purple-500/50 p-4 backdrop-blur-sm">
            <div className="text-2xl font-black text-purple-400">{stats.total}</div>
            <div className="text-sm text-gray-400 font-mono">TOTAL</div>
          </div>
          <div className="bg-black/50 border-2 border-cyan-500/50 p-4 backdrop-blur-sm">
            <div className="text-2xl font-black text-cyan-400">{stats.active}</div>
            <div className="text-sm text-gray-400 font-mono">ACTIVE</div>
          </div>
          <div className="bg-black/50 border-2 border-pink-500/50 p-4 backdrop-blur-sm">
            <div className="text-2xl font-black text-pink-400">{stats.completed}</div>
            <div className="text-sm text-gray-400 font-mono">DONE</div>
          </div>
        </motion.div>

        {/* Add Todo Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <div className="bg-black/70 border-2 border-white/20 p-6 backdrop-blur-sm">
            <div className="flex gap-4">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                placeholder="ADD NEW TASK..."
                className="flex-1 bg-transparent border-2 border-gray-700 px-4 py-3 text-white placeholder-gray-500 font-mono uppercase tracking-wide focus:border-purple-500 focus:outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={addTodo}
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 font-black uppercase tracking-wide hover:from-purple-700 hover:to-pink-700 transition-all flex items-center gap-2"
              >
                <Plus size={20} />
                ADD
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-4 mb-8 justify-between items-center"
        >
          <div className="flex gap-2">
            {['all', 'active', 'completed'].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-6 py-2 font-mono uppercase tracking-wide border-2 transition-all ${
                  filter === filterType
                    ? 'bg-cyan-500 border-cyan-500 text-black'
                    : 'bg-transparent border-gray-700 text-gray-400 hover:border-cyan-500 hover:text-cyan-400'
                }`}
              >
                {filterType}
              </button>
            ))}
          </div>
          {stats.completed > 0 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={clearCompleted}
              className="bg-red-600/20 border-2 border-red-500 px-6 py-2 font-mono uppercase tracking-wide text-red-400 hover:bg-red-600/40 transition-all flex items-center gap-2"
            >
              <Trash2 size={16} />
              CLEAR COMPLETED
            </motion.button>
          )}
        </motion.div>

        {/* Todo List */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredTodos.map((todo, index) => (
              <motion.div
                key={todo.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-black/50 border-2 backdrop-blur-sm p-6 ${
                  todo.completed 
                    ? 'border-green-500/50 bg-green-900/10' 
                    : 'border-gray-700 hover:border-purple-500/50'
                } transition-all group`}
              >
                <div className="flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleTodo(todo.id)}
                    className={`w-8 h-8 border-2 flex items-center justify-center transition-all ${
                      todo.completed
                        ? 'bg-green-500 border-green-500'
                        : 'border-gray-600 hover:border-green-500'
                    }`}
                  >
                    {todo.completed && <Check size={16} className="text-black" />}
                  </motion.button>

                  <div className="flex-1">
                    {editingId === todo.id ? (
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && saveEdit()}
                          className="flex-1 bg-transparent border-b-2 border-purple-500 pb-1 text-white font-mono focus:outline-none"
                          autoFocus
                        />
                        <button
                          onClick={saveEdit}
                          className="text-green-400 hover:text-green-300 p-1"
                        >
                          <Save size={16} />
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="text-red-400 hover:text-red-300 p-1"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      <div>
                        <div className={`font-mono text-lg ${
                          todo.completed 
                            ? 'line-through text-gray-500' 
                            : 'text-white'
                        }`}>
                          {todo.text}
                        </div>
                        <div className="text-xs text-gray-500 mt-1 flex items-center gap-2">
                          <Calendar size={12} />
                          {new Date(todo.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {editingId !== todo.id && (
                      <>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => startEditing(todo.id, todo.text)}
                          className="text-blue-400 hover:text-blue-300 p-2"
                        >
                          <Edit3 size={16} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => deleteTodo(todo.id)}
                          className="text-red-400 hover:text-red-300 p-2"
                        >
                          <Trash2 size={16} />
                        </motion.button>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredTodos.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <AlertCircle size={64} className="mx-auto text-gray-600 mb-4" />
              <div className="text-2xl font-mono text-gray-500 uppercase tracking-wide">
                {filter === 'all' ? 'NO TASKS YET' : 
                 filter === 'active' ? 'NO ACTIVE TASKS' : 
                 'NO COMPLETED TASKS'}
              </div>
              <div className="text-gray-600 mt-2">
                {filter === 'all' ? 'Add your first task above' : 
                 `Switch to "all" to see ${filter === 'active' ? 'completed' : 'active'} tasks`}
              </div>
            </motion.div>
          )}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 py-8 border-t border-gray-800"
        >
          <div className="text-gray-600 font-mono text-sm uppercase tracking-widest">
            DARKNEO BRUTALISM SYSTEM v1.0
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TodoPage;