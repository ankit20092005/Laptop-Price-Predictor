import { User, Mail, Calendar } from "lucide-react";
import Layout from "../components/layout/Layout";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user } = useAuth();

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">

        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Profile
          </h1>

          <p className="mt-2 text-gray-500">
            View your account information.
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">

          {/* Avatar */}

          <div className="flex flex-col items-center">

            <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold">

              {user?.name?.charAt(0).toUpperCase()}

            </div>

            <h2 className="text-2xl font-semibold mt-4">

              {user?.name}

            </h2>

          </div>

          {/* Details */}

          <div className="mt-10 space-y-6">

            <div className="flex items-center gap-4">

              <User className="text-blue-600" />

              <div>

                <p className="text-gray-500 text-sm">

                  Name

                </p>

                <p className="font-medium">

                  {user?.name}

                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <Mail className="text-blue-600" />

              <div>

                <p className="text-gray-500 text-sm">

                  Email

                </p>

                <p className="font-medium">

                  {user?.email}

                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <Calendar className="text-blue-600" />

              <div>

                <p className="text-gray-500 text-sm">

                  Account

                </p>

                <p className="font-medium">
                  {new Date(user.createdAt).toLocaleDateString("en-IN")}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default Profile;