import { useState, useCallback } from "react";

const defaultInclude = {
  palitos: true,
  wasabi: true,
  jengibreEncurtido: true,
  salsa: "soja",
};

export const useSelections = () => {
  const [dataById, setDataById] = useState({});

  const get = useCallback(
    (id) => ({
      include: {
        ...defaultInclude,
        ...(dataById[id]?.include || {}),
      },
      extras: dataById[id]?.extras || [],
      drinks: dataById[id]?.drinks || [],
    }),
    [dataById]
  );

  const updateInclude = useCallback((id, key, value) => {
    setDataById((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        include: {
          ...defaultInclude,
          ...prev[id]?.include,
          [key]: value,
        },
      },
    }));
  }, []);

  const toggleItem = useCallback((id, type, item) => {
    setDataById((prev) => {
      const list = prev[id]?.[type] || [];
      const exists = list.find((i) => i._id === item._id);

      return {
        ...prev,
        [id]: {
          ...prev[id],
          [type]: exists
            ? list.filter((i) => i._id !== item._id)
            : [...list, item],
        },
      };
    });
  }, []);

  return { get, updateInclude, toggleItem };
};
