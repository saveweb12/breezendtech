const AdminPages = () => {
    const [pages, setPages] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchPages = async () => {
        try {
          const data = await fetchFromAdminAPI("pages");
          setPages(data);
        } catch (err) {
          setError(err.message);
        }
      };
  
      fetchPages();
    }, []);
  
    if (error) {
      return <p>Error: {error}</p>;
    }
  
    if (!pages.length) {
      return <p>Loading...</p>;
    }
  }
  export default AdminPages;