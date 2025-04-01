"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSkills } from "@/libAdmin/features/skills";
import { AlignJustify, SquarePen, X, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Checkbox } from "@/components/ui/checkbox";
import DataTable from "@/components/data-table/DataTable";
import axios from "axios";

const SkillTable = ({ onEdit }) => {
  const dispatch = useDispatch();
  const { skills } = useSelector((state) => state.skills);
  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  const data = skills.map((skil) => ({
    id: skil.id,
    name: skil.skillname,
    active: "on",
    createdat: skil.created_at,
    action: "",
  }));

  const columns = [
    {
      id: "Select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
    },
    {
      accessorKey: "id",
      header: "ID",
      cell: ({ row }) => {
        return <div>{row.getValue("id")}</div>;
      },
    },
    {
      accessorKey: "name",
      header: <div className="w-44">Name</div>,
      cell: ({ row }) => {
        return <div className="min-w-10">{row.getValue("name")}</div>;
      },
    },
    {
      accessorKey: "active",
      header: "Active",
      cell: () => {
        const [isYes, setIsYes] = useState(false);
        return (
          <Toggle
            pressed={isYes}
            onPressedChange={setIsYes}
            className={`!text-white w-5 h-5 ${isYes ? "!bg-green-600" : "!bg-red-400"
              }`}
          >
            {isYes ? "Yes" : "No"}
          </Toggle>
        );
      },
    },
    {
      accessorKey: "createdat",
      header: "Created At",
      cell: ({ row }) => {
        const date = new Date(row.getValue("createdat"));
        const formattedDate = date.toLocaleDateString("en-GB");

        return <div>{formattedDate}</div>;
      },
    },
    {
      accessorKey: "action",
      header: <div className="w-10">Action</div>,
      cell: ({ row }) => (
        <Button variant="outline" onClick={() => onEdit(row.original)}>
          <SquarePen />
        </Button>
      ),
    },
  ];

  const handleDelete = async (selectedIds) => {
    console.log(selectedIds)
    if (selectedIds.length === 0) {
      alert("No rows are selected for delete")
    };

    if (!window.confirm(`Are you sure you want to delete ${selectedIds.length} row`)) {
      return;
    }

    try {
      const response = await axios.post(`https://breezend-backend-2.onrender.com/api/job/delete-skills`,
        { id: selectedIds }
      )
      console.log("Deleted successfully:", response.data);
      alert("Selected rows deleted successfully!");
      await dispatch(fetchSkills()).unwrap();
    } catch (error) {
      console.error("Delete Skills API error", error.response?.data || "Something wents wrong")
    }
  }
  return <DataTable data={data} columns={columns} handleDelete={handleDelete} />;
};

export default SkillTable;
