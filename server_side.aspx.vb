Imports System.Web.Services

Public Class server_side
    Inherits System.Web.UI.Page

    <WebMethod>
    Public Shared Function exe(keywords As String, query_mode As String, orderred_datarow_collection_mode As String, simple_case As Boolean, i_orderred_datarow_collection As Integer, desirable_content_length_count As Integer) As String

        Dim server_side As New server_side

        Dim wcf As New WcfService1.Service1

        Dim RANK = 0
        Dim desirable_content_length = 100 * (10 + desirable_content_length_count * 2)

        Dim result = wcf.GetData(keywords, query_mode, orderred_datarow_collection_mode, simple_case, i_orderred_datarow_collection, 0, desirable_content_length)

        result = Regex.Replace(result, "rank_100_start", "<span style=""color: red;"">")
        result = Regex.Replace(result, "rank_100_end", "</span>")

        result = Regex.Replace(result, "\n", "<br/>")

        Return result

    End Function

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub


End Class