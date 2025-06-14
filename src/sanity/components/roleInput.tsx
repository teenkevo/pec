import React, { useState, useEffect } from "react";
import { useFormValue, useClient } from "sanity";
import { StringInputProps } from "sanity";

interface RoleOption {
  title: string;
  value: string;
}

const CustomRoleInput = (props: StringInputProps) => {
  const [roleOptions, setRoleOptions] = useState<RoleOption[]>([]);
  const [loading, setLoading] = useState(false);

  const document = useFormValue([]) as any;
  // Get Sanity client
  const client = useClient();

  const departmentRef = document?.position?.department?._ref;

  useEffect(() => {
    const fetchRoles = async () => {
      if (!departmentRef) {
        setRoleOptions([]);
        return;
      }

      setLoading(true);

      try {
        const department = await client.fetch(
          `*[_type == "department" && _id == $departmentId][0]`,
          { departmentId: departmentRef }
        );

        if (department?.roles && Array.isArray(department.roles)) {
          const options: RoleOption[] = department.roles.map(
            (role: any, index: number) => ({
              title: `${role.something || `Role ${index + 1}`} - ${role.salary || "No salary"}`,
              value: role.something || `role-${index}`,
            })
          );

          setRoleOptions(options);
        } else {
          setRoleOptions([]);
        }
      } catch (error) {
        console.error("Error fetching roles:", error);
        setRoleOptions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRoles();
  }, [departmentRef, client]);

  return props.renderDefault({
    ...props,
    schemaType: {
      ...props.schemaType,
      options: {
        ...props.schemaType.options,
        list: loading
          ? [{ title: "Loading roles...", value: "" }]
          : !departmentRef
            ? [{ title: "Please select a department first", value: "" }]
            : roleOptions.length === 0
              ? [{ title: "No roles found for this department", value: "" }]
              : roleOptions,
      },
    },
  });
};

export default CustomRoleInput;
