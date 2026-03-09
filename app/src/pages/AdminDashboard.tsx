import { useState, useEffect } from 'react';
import { Users, Flame, Shield, RefreshCw, Edit2, Check, X, Search, BookOpen, Plus, Trash2 } from 'lucide-react';
import { userService } from '@/services/userService';
import { issueService, type IslamicIssue } from '@/services/issueService';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

type AdminTab = 'users' | 'issues';

export function AdminDashboard() {
    const [activeTab, setActiveTab] = useState<AdminTab>('users');

    // User State
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingUserId, setEditingUserId] = useState<string | null>(null);
    const [editValues, setEditValues] = useState({ currentStreak: 0, longestStreak: 0 });

    // Issues State
    const [issues, setIssues] = useState<IslamicIssue[]>([]);
    const [issueSearchTerm, setIssueSearchTerm] = useState('');
    const [isEditingIssue, setIsEditingIssue] = useState<boolean>(false);
    const [currentIssue, setCurrentIssue] = useState<Partial<IslamicIssue> | null>(null);

    useEffect(() => {
        fetchUsers();
        fetchIssues();
    }, []);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await userService.adminGetAllUsers();
            if (response.success) {
                setUsers(response.data || []);
            }
        } catch (error) {
            toast.error('Failed to fetch users');
        } finally {
            setLoading(false);
        }
    };

    const fetchIssues = async () => {
        try {
            setLoading(true);
            const response = await issueService.getAll();
            if (response.success) {
                setIssues(response.data || []);
            }
        } catch (error) {
            toast.error('Failed to fetch issues database connection');
        } finally {
            setLoading(false);
        }
    };

    const handleEditInit = (user: any) => {
        setEditingUserId(user.id);
        setEditValues({
            currentStreak: user.userStreak?.currentStreak || 0,
            longestStreak: user.userStreak?.longestStreak || 0,
        });
    };

    const handleUpdateStreak = async (userId: string) => {
        try {
            const response = await userService.adminUpdateStreak({
                userId,
                ...editValues,
            });

            if (response.success) {
                toast.success('Streak updated successfully');
                setEditingUserId(null);
                fetchUsers();
            }
        } catch (error) {
            toast.error('Failed to update streak');
        }
    };

    const handleSaveIssue = async () => {
        try {
            if (currentIssue?.id) {
                // Update
                const response = await issueService.update(currentIssue.id, currentIssue);
                if (response.success) toast.success('Topic updated');
            } else {
                // Create
                const response = await issueService.create(currentIssue as any);
                if (response.success) toast.success('Topic created');
            }
            setIsEditingIssue(false);
            setCurrentIssue(null);
            fetchIssues();
        } catch (error) {
            toast.error('Failed to save issue');
        }
    };

    const handleDeleteIssue = async (id: string) => {
        if (!confirm('Are you sure you want to delete this topic?')) return;
        try {
            const response = await issueService.delete(id);
            if (response.success) {
                toast.success('Topic deleted');
                fetchIssues();
            }
        } catch (e) {
            toast.error('Failed to delete topic');
        }
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredIssues = issues.filter(issue =>
        issue.title.toLowerCase().includes(issueSearchTerm.toLowerCase()) ||
        issue.category.toLowerCase().includes(issueSearchTerm.toLowerCase())
    );

    const stats = {
        totalUsers: users.length,
        activeStreaks: users.filter(u => (u.userStreak?.currentStreak || 0) > 0).length,
        admins: users.filter(u => u.role === 'ADMIN').length,
    };

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                        <Shield className="w-8 h-8 text-[#C9A84C]" />
                        Admin Panel
                    </h1>
                    <p className="text-slate-400 mt-1">Manage users, streaks, and platform data</p>
                </div>
                <button
                    onClick={() => { fetchUsers(); fetchIssues(); }}
                    className="flex items-center gap-2 bg-[#1E2D4D] text-[#C9A84C] px-4 py-2 rounded-lg hover:bg-[#2A3B5F] transition-colors"
                >
                    <RefreshCw className={cn("w-4 h-4", loading && "animate-spin")} />
                    Refresh Data
                </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex gap-4 border-b border-[#1E2D4D] pb-1">
                <button
                    onClick={() => setActiveTab('users')}
                    className={cn(
                        "px-4 py-2 font-medium transition-colors border-b-2",
                        activeTab === 'users' ? "border-[#C9A84C] text-[#C9A84C]" : "border-transparent text-slate-400 hover:text-white"
                    )}
                >
                    <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" /> Users
                    </div>
                </button>
                <button
                    onClick={() => setActiveTab('issues')}
                    className={cn(
                        "px-4 py-2 font-medium transition-colors border-b-2",
                        activeTab === 'users' ? "border-transparent text-slate-400 hover:text-white" : "border-[#C9A84C] text-[#C9A84C]"
                    )}
                >
                    <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" /> Islamic Research
                    </div>
                </button>
            </div>

            {activeTab === 'users' && (
                <>
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { label: 'Total Users', value: stats.totalUsers, icon: Users, color: 'text-blue-400' },
                            { label: 'Active Streaks', value: stats.activeStreaks, icon: Flame, color: 'text-orange-400' },
                            { label: 'Admin Count', value: stats.admins, icon: Shield, color: 'text-[#C9A84C]' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-[#141C35]/50 border border-[#1E2D4D] p-6 rounded-2xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
                                        <p className="text-3xl font-bold text-white mt-1">{stat.value}</p>
                                    </div>
                                    <div className={cn("p-3 rounded-xl bg-[#1E2D4D]", stat.color)}>
                                        <stat.icon className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* User Table Section */}
                    <div className="bg-[#141C35]/50 border border-[#1E2D4D] rounded-2xl overflow-hidden">
                        <div className="p-6 border-b border-[#1E2D4D] flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <h2 className="text-xl font-semibold text-white">User Management</h2>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                <input
                                    type="text"
                                    placeholder="Search by name or email..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="bg-[#1E2D4D] border-none text-white pl-10 pr-4 py-2 rounded-lg w-full md:w-64 focus:ring-1 focus:ring-[#C9A84C]"
                                />
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-[#1E2D4D]/50 text-slate-400 text-sm">
                                        <th className="px-6 py-4 font-medium">User</th>
                                        <th className="px-6 py-4 font-medium">Role</th>
                                        <th className="px-6 py-4 font-medium">Current Streak</th>
                                        <th className="px-6 py-4 font-medium">Longest Streak</th>
                                        <th className="px-6 py-4 font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#1E2D4D]">
                                    {loading ? (
                                        <tr>
                                            <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                                                <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-2" />
                                                Loading users...
                                            </td>
                                        </tr>
                                    ) : filteredUsers.length === 0 ? (
                                        <tr>
                                            <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                                                No users found
                                            </td>
                                        </tr>
                                    ) : filteredUsers.map((user) => (
                                        <tr key={user.id} className="hover:bg-[#1E2D4D]/20 transition-colors">
                                            <td className="px-6 py-4">
                                                <div>
                                                    <p className="text-white font-medium">{user.name}</p>
                                                    <p className="text-slate-400 text-sm">{user.email}</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={cn(
                                                    "px-2 py-1 rounded-md text-xs font-bold",
                                                    user.role === 'ADMIN' ? "bg-[#C9A84C]/20 text-[#C9A84C]" : "bg-blue-400/20 text-blue-400"
                                                )}>
                                                    {user.role}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                {editingUserId === user.id ? (
                                                    <input
                                                        type="number"
                                                        value={editValues.currentStreak}
                                                        onChange={(e) => setEditValues({ ...editValues, currentStreak: parseInt(e.target.value) || 0 })}
                                                        className="bg-[#0F172A] border border-[#1E2D4D] text-white w-20 px-2 py-1 rounded"
                                                    />
                                                ) : (
                                                    <span className="text-white flex items-center gap-1">
                                                        <Flame className="w-4 h-4 text-orange-500" />
                                                        {user.userStreak?.currentStreak || 0}
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-white">
                                                {editingUserId === user.id ? (
                                                    <input
                                                        type="number"
                                                        value={editValues.longestStreak}
                                                        onChange={(e) => setEditValues({ ...editValues, longestStreak: parseInt(e.target.value) || 0 })}
                                                        className="bg-[#0F172A] border border-[#1E2D4D] text-white w-20 px-2 py-1 rounded"
                                                    />
                                                ) : (
                                                    user.userStreak?.longestStreak || 0
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                {editingUserId === user.id ? (
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => handleUpdateStreak(user.id)}
                                                            className="p-2 bg-green-500/20 text-green-500 rounded-lg hover:bg-green-500/30"
                                                        >
                                                            <Check className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => setEditingUserId(null)}
                                                            className="p-2 bg-red-500/20 text-red-500 rounded-lg hover:bg-red-500/30"
                                                        >
                                                            <X className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <button
                                                        onClick={() => handleEditInit(user)}
                                                        className="p-2 bg-blue-500/20 text-blue-500 rounded-lg hover:bg-blue-500/30"
                                                    >
                                                        <Edit2 className="w-4 h-4" />
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}

            {activeTab === 'issues' && (
                <div className="bg-[#141C35]/50 border border-[#1E2D4D] rounded-2xl overflow-hidden">
                    <div className="p-6 border-b border-[#1E2D4D] flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <h2 className="text-xl font-semibold text-white">Islamic Research Topics</h2>
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                <input
                                    type="text"
                                    placeholder="Search topic..."
                                    value={issueSearchTerm}
                                    onChange={(e) => setIssueSearchTerm(e.target.value)}
                                    className="bg-[#1E2D4D] border-none text-white pl-10 pr-4 py-2 rounded-lg w-full md:w-64 focus:ring-1 focus:ring-[#C9A84C]"
                                />
                            </div>
                            <button
                                onClick={() => {
                                    setIsEditingIssue(true);
                                    setCurrentIssue({});
                                }}
                                className="flex items-center gap-2 bg-[#C9A84C] text-[#0A0F1C] px-4 py-2 rounded-lg hover:bg-[#D4B55B] transition-colors font-medium"
                            >
                                <Plus className="w-4 h-4" /> Add Topic
                            </button>
                        </div>
                    </div>

                    {isEditingIssue ? (
                        <div className="p-6 space-y-4">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold text-white">{currentIssue?.id ? 'Edit Topic' : 'New Topic'}</h3>
                                <button onClick={() => setIsEditingIssue(false)} className="text-slate-400 hover:text-white">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Title" value={currentIssue?.title || ''} onChange={e => setCurrentIssue({ ...currentIssue, title: e.target.value })} className="bg-[#1E2D4D] border border-[#2A3B5F] text-white p-3 rounded-xl focus:ring-1 focus:ring-[#C9A84C]" />
                                <input type="text" placeholder="Category (e.g., Major Sins)" value={currentIssue?.category || ''} onChange={e => setCurrentIssue({ ...currentIssue, category: e.target.value })} className="bg-[#1E2D4D] border border-[#2A3B5F] text-white p-3 rounded-xl focus:ring-1 focus:ring-[#C9A84C]" />
                                <textarea placeholder="Description" value={currentIssue?.description || ''} onChange={e => setCurrentIssue({ ...currentIssue, description: e.target.value })} className="bg-[#1E2D4D] border border-[#2A3B5F] text-white p-3 rounded-xl col-span-1 md:col-span-2 min-h-24 focus:ring-1 focus:ring-[#C9A84C]" />
                                <textarea placeholder="Consequences" value={currentIssue?.consequences || ''} onChange={e => setCurrentIssue({ ...currentIssue, consequences: e.target.value })} className="bg-[#1E2D4D] border border-[#2A3B5F] text-white p-3 rounded-xl min-h-24 focus:ring-1 focus:ring-[#C9A84C]" />
                                <textarea placeholder="Reasons to Avoid" value={currentIssue?.reasonsToAvoid || ''} onChange={e => setCurrentIssue({ ...currentIssue, reasonsToAvoid: e.target.value })} className="bg-[#1E2D4D] border border-[#2A3B5F] text-white p-3 rounded-xl min-h-24 focus:ring-1 focus:ring-[#C9A84C]" />
                                <textarea placeholder="How to Fix / Repentance" value={currentIssue?.howToFix || ''} onChange={e => setCurrentIssue({ ...currentIssue, howToFix: e.target.value })} className="bg-[#1E2D4D] border border-[#2A3B5F] text-white p-3 rounded-xl min-h-24 focus:ring-1 focus:ring-[#C9A84C]" />
                                <textarea placeholder="Quranic Evidence" value={currentIssue?.evidenceQuran || ''} onChange={e => setCurrentIssue({ ...currentIssue, evidenceQuran: e.target.value })} className="bg-[#1E2D4D] border border-[#2A3B5F] text-white p-3 rounded-xl min-h-24 focus:ring-1 focus:ring-[#C9A84C]" />
                                <textarea placeholder="Hadith Evidence" value={currentIssue?.evidenceHadith || ''} onChange={e => setCurrentIssue({ ...currentIssue, evidenceHadith: e.target.value })} className="bg-[#1E2D4D] border border-[#2A3B5F] text-white p-3 rounded-xl min-h-24 col-span-1 md:col-span-2 focus:ring-1 focus:ring-[#C9A84C]" />
                            </div>
                            <div className="flex justify-end pt-4">
                                <button onClick={handleSaveIssue} className="bg-[#C9A84C] text-[#0A0F1C] px-6 py-2 rounded-lg font-medium hover:bg-[#D4B55B] transition-colors">
                                    Save Topic
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-[#1E2D4D]/50 text-slate-400 text-sm">
                                        <th className="px-6 py-4 font-medium">Title</th>
                                        <th className="px-6 py-4 font-medium">Category</th>
                                        <th className="px-6 py-4 font-medium">Description Snippet</th>
                                        <th className="px-6 py-4 font-medium text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#1E2D4D]">
                                    {loading ? (
                                        <tr><td colSpan={4} className="px-6 py-12 text-center text-slate-500"><RefreshCw className="w-8 h-8 animate-spin mx-auto mb-2" /> Loading...</td></tr>
                                    ) : filteredIssues.length === 0 ? (
                                        <tr><td colSpan={4} className="px-6 py-12 text-center text-slate-500">No topics found. Add one!</td></tr>
                                    ) : filteredIssues.map((issue) => (
                                        <tr key={issue.id} className="hover:bg-[#1E2D4D]/20 transition-colors cursor-pointer" onClick={() => { setCurrentIssue(issue); setIsEditingIssue(true); }}>
                                            <td className="px-6 py-4 font-medium text-white">{issue.title}</td>
                                            <td className="px-6 py-4"><span className="bg-[#1E2D4D] text-slate-300 px-2 py-1 rounded text-xs">{issue.category}</span></td>
                                            <td className="px-6 py-4 text-slate-400 text-sm">{issue.description.substring(0, 50)}...</td>
                                            <td className="px-6 py-4 flex gap-2 justify-end">
                                                <button onClick={(e) => { e.stopPropagation(); setCurrentIssue(issue); setIsEditingIssue(true); }} className="p-2 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 rounded-lg"><Edit2 className="w-4 h-4" /></button>
                                                <button onClick={(e) => { e.stopPropagation(); handleDeleteIssue(issue.id); }} className="p-2 bg-red-500/10 text-red-500 hover:bg-red-500/20 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
