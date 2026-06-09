// app/(tabs)/_layout.tsx
import Ionicons from "@expo/vector-icons/Ionicons"; // Importamos los íconos
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d", // Color del ícono y texto cuando está seleccionado
        headerStyle: {
          backgroundColor: "#25292e", // Color de fondo del header de arriba
        },
        headerShadowVisible: false, // Quitamos la línea/sombra fea del header
        headerTintColor: "#fff", // Color del texto del header
        tabBarStyle: {
          backgroundColor: "#25292e", // Color de fondo de la barra de pestañas de abajo
        },
      }}
    >
      {/* Pestaña de Inicio */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />

      {/* Pestaña de Acerca de */}
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
