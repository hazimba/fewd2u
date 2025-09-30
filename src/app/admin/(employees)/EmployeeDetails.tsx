"use client";
import { DialogHeader } from "@/components/ui/dialog";
import { Employee } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Briefcase, Mail, Phone, Shield, User } from "lucide-react";

interface EmployeeDetailsProps {
  selectedEmployee: Employee;
  open: boolean;
  setOpen: (open: boolean) => void;
}
const EmployeeDetails = ({
  open,
  setOpen,
  selectedEmployee,
}: EmployeeDetailsProps) => {
  return (
    // styling by claude
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader className="lg:space-y-3">
          <DialogTitle className="lg:text-2xl">User Details</DialogTitle>
          <DialogDescription>View complete user information</DialogDescription>
        </DialogHeader>

        {selectedEmployee && (
          <div className="lg:mt-6 space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-200 hover:bg-slate-100 transition-colors">
              <User className="w-5 h-5 text-slate-600 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                  Name
                </p>
                <p className="text-sm text-slate-900 font-medium truncate">
                  {selectedEmployee.name}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-200 hover:bg-slate-100 transition-colors">
              <Mail className="w-5 h-5 text-slate-600 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                  Email
                </p>
                <p className="text-sm text-slate-900 truncate">
                  {selectedEmployee.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-200 hover:bg-slate-100 transition-colors">
              <Phone className="w-5 h-5 text-slate-600 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                  Phone
                </p>
                <p className="text-sm text-slate-900">
                  {selectedEmployee.phone}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-200 hover:bg-slate-100 transition-colors">
              <Shield className="w-5 h-5 text-slate-600 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                  Status
                </p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {selectedEmployee.status}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-200 hover:bg-slate-100 transition-colors">
              <Briefcase className="w-5 h-5 text-slate-600 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                  Role
                </p>
                <p className="text-sm text-slate-900 font-medium">
                  {selectedEmployee.role}
                </p>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
export default EmployeeDetails;
