// lib/api.js

export async function fetchPages({
    page = 1,
    limit = 10,
    status = null,
    search = "",
    sortBy = "created_at",
    order = "desc",
  }) {
    const query = new URLSearchParams({ page, limit, sortBy, order });
  
    if (status !== null) query.append("status", status);
    if (search) query.append("search", search);
  
    const response = await fetch(`/api/admin/pages?${query.toString()}`);
    if (!response.ok) {
      throw new Error("Failed to fetch pages");
    }
  
    return response.json();
  }
  